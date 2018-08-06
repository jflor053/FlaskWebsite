from app import app
from flask import Flask, render_template
from app import app.models
from app.models import * 
from flask import jsonify, request, url_for, render_template, g,Flask, render_template, request, redirect, url_for, flash, make_response, session
import json, copy, calendar, re, requests, sys
import uuid



@app.route('/')
def index():
    return render_template('index.html')

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
	return jsonify({'message': 'Club event created', 'secret_id': club_user.public_id}) 