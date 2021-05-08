from flask import Flask, render_template
import datetime

# app = Flask(__name__, static_folder="build/static", template_folder="build")
app = Flask(__name__)

@app.route("/")
def hello():
    return "Hello"

    # return render_template('index.html')

@app.route("/time")
def get_current_time():
    return {"time": datetime.datetime.now())}

print('Starting Flask!')

app.debug=True
app.run(host='0.0.0.0')
