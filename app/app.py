from flask import Flask
from flask import render_template


app = Flask(__name__)

@app.route("/")
def home():
    return render_template('hello.html')

@app.route("/test")
def test():
    return "new page"

if __name__ == "__main__":
    app.run(debug=True)
