from app import app
from flask import Flask, render_template
from app import models
from .models import *
from flask import jsonify, request, url_for, render_template,Flask, render_template, request, redirect, url_for, flash, make_response, session
import json, copy, calendar, re, requests, sys
import uuid
from pyfcm.fcm import FCMNotification



@app.route('/')
def index():
    return render_template('index.html')


@app.route('/clubs/', methods = ['GET'])
def getClubs():
	info = Clubs.query.all()
	club_schema = ClubsSchema(many=True)
	result = club_schema.dump(info).data
	return club_schema.jsonify(result)


@app.route('/clubs/<public_id>', methods = ['GET'])
def getClubInfo(public_id):
	info = Clubs.query.filter_by(public_id = public_id).first()
	club_schema = ClubsSchema()
	output = club_schema.dump(info).data 
	resp = club_schema.jsonify(info)
	return resp

@app.route('/clubs/register', methods =['POST'])
def create_event():
	data = request.get_json()
	club_schema = ClubsSchema()
	club_user = Clubs(public_id=str(uuid.uuid4()), name=data['name'], description=data['description'], time_start = data['time_start'], time_end = data['time_end'],date_week = data['date_week'], event_date= data['event_date'], location = data['location'])
	db.session.add(club_user)
	db.session.commit()
 
 	push_service = FCMNotification(api_key="AAAAp-1UTKo:APA91bF9KFpF7_cBlfSohNuNTJL-UpLOKSp1b4S_vG44C3GezCsFM-86ltgf152LkZc_ngUblPWVk4ZVRpJZxH8TYuKGt-zje81fYb3A1AQAD0lY_W9EEOs3-nTH99YeRDIRuoIkWp4v")

	registration_id = "ftKlJ-8Vq0E:APA91bFUgrXrt6LdW4_j3-Pe6IBYZwE26n5pQ-JJW-UnUp1pQx-bPe1tQgmBr5e0XfHs6dkStradmxybvD92CjmST328CrD9YU1UIhRKxq6ZAhY-2ox2Q1oA8bziZeQ9y16L9n_ULmnXwBOIDG3LkxVSwgRn5m_7_Q"
	message_title = "New Event Posted"
	message_body = club_user.name + ' ' + club_user.description + ' ' + club_user.time_start + ' '+  club_user.time_end + ' '+ club_user.date_week + ' ' + club_user.event_date + ' ' +club_user.location
	result = push_service.notify_single_device(registration_id=registration_id, message_title=message_title, message_body=message_body)
	print result
	return jsonify({'message': 'Club event created', 'secret_id': club_user.public_id}) 
