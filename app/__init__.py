from flask import Flask 
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
from flask_migrate import Migrate

app = Flask(__name__,static_folder='../Frontend/dist',template_folder='../Frontend/src')
app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://jflor053::iguanas1@localhost/campusmate'
app.debug= True
ma = Marshmallow(app)
db = SQLAlchemy(app)
migrate = Migrate(app,db)
from app import routes 
from app import models