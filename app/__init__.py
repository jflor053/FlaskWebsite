from flask import Flask 
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
from flask_migrate import Migrate
from pyfcm.fcm import FCMNotification


app = Flask(__name__,static_folder='../Frontend/dist',template_folder='../Frontend/src')

app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://jflor053::iguanas1@localhost/campusmate' #local
#app.config['SQLALCHEMY_DATABASE_URI'] = 'postgres://hnrshvnldyybmi:af848d87346a91e5341b933c898efc54ce6d81f5ba17aebd93dd5e7a6a87d59a@ec2-23-23-216-40.compute-1.amazonaws.com:5432/dbuufppsg17dks'  #heroku 

app.debug= True
ma = Marshmallow(app)
db = SQLAlchemy(app)
migrate = Migrate(app,db)



#push_service = FCMNotification(api_key="AAAAp-1UTKo:APA91bF9KFpF7_cBlfSohNuNTJL-UpLOKSp1b4S_vG44C3GezCsFM-86ltgf152LkZc_ngUblPWVk4ZVRpJZxH8TYuKGt-zje81fYb3A1AQAD0lY_W9EEOs3-nTH99YeRDIRuoIkWp4v")

# OR initialize with proxies


# Your api-key can be gotten from:  https://console.firebase.google.com/project/<project-name>/settings/cloudmessaging

#registration_id = "fK11pCqheBo:APA91bH0yZ_EY32XTcntV8h_OpKzOIc10a4sUMA820RUij0nJtIM6AnfbRM_Xf0TnUyKfY1DzIf0rUL4BwqGZbY9drO2FDsrZfcJifj_Vw9gwzKlNJ0dk0XsA5rw2Fw5yzPUpfUzVN5z4fu-0J9dis8xuQjXimZBlg"
#message_title = "Uber update"
#message_body = "Hi john, your customized news for today is ready"
#result = push_service.notify_single_device(registration_id=registration_id, message_title=message_title, message_body=message_body)

# Send to multiple devices by passing a list of ids.
#####registration_ids = ["fK11pCqheBo:APA91bH0yZ_EY32XTcntV8h_OpKzOIc10a4sUMA820RUij0nJtIM6AnfbRM_Xf0TnUyKfY1DzIf0rUL4BwqGZbY9drO2FDsrZfcJifj_Vw9gwzKlNJ0dk0XsA5rw2Fw5yzPUpfUzVN5z4fu-0J9dis8xuQjXimZBlg"]
#message_title = "Uber update"
#message_body = "Hope you're having fun this weekend, don't forget to check today's news"
#result = push_service.notify_multiple_devices(registration_ids=registration_ids, #message_title=message_title, message_body=message_body)



from app import routes 
from app import models
