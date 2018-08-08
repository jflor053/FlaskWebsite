from flask import Flask 
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
from flask_migrate import Migrate

app = Flask(__name__,static_folder='../Frontend/dist',template_folder='../Frontend/src')

#app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://jflor053::iguanas1@localhost/campusmate' #local
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgres://hnrshvnldyybmi:af848d87346a91e5341b933c898efc54ce6d81f5ba17aebd93dd5e7a6a87d59a@ec2-23-23-216-40.compute-1.amazonaws.com:5432/dbuufppsg17dks'  #heroku 

app.debug= True
ma = Marshmallow(app)
db = SQLAlchemy(app)
migrate = Migrate(app,db)
from app import routes 
from app import models
