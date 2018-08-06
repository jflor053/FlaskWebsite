import datetime
from werkzeug.security import generate_password_hash, check_password_hash
from flask import Flask 
from app import db,ma


class Clubs(db.Model):


    __tablename__ = 'Clubs'
    id = db.Column(db.Integer, primary_key=True)
    public_id = db.Column(db.String(100), unique = True)
    name = db.Column(db.String(200), unique=True)
    description = db.Column(db.String(500))
    time_start = db.Column(db.String(100))
    time_end = db.Column(db.String(100))
    date_week = db.Column(db.String(100))
    event_date = db.Column(db.String(100))
    location = db.Column(db.String(100))



    def __init__(self,public_id,name,description,time_start,time_end,date_week,event_date,location):  #CONSTRUCTOR 
        self.public_id = public_id
        self.name = name 
        self.description = description
        self.time_start = time_start
        self.time_end = time_end
        self.date_week = date_week
        self.event_date = event_date
        self.location = location

class ClubsSchema(ma.ModelSchema):
    class Meta:
        model = Clubs





