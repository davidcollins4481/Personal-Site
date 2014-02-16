from flask import Flask
from flask import render_template
import os
import urllib2
import json

app = Flask(__name__)

@app.route("/")
def home():
    return render_template('homepage.html')

@app.route("/about")
def about():
    return render_template('about.html')

@app.route("/contact")
def contact():
    return render_template('contact.html')

@app.route("/local-hospitals-medicare")
def localHospitals():
    response = urllib2.urlopen('https://data.cms.gov/resource/ippps.json?provider_state=OH&%24where=provider_city%20%3D%20%27AKRON%27%20or%20provider_city%20%3D%20%27CANTON%27%20or%20provider_city%20%3D%20%27MASSILLON%27')

    json_response = response.read()
    return render_template('local_hospitals.html', data=json_response)

if __name__ == "__main__":
    if os.environ.get('DEBUG'):
        app.debug = True
        app.run('127.0.0.1',5001)
    else:
        app.run()
