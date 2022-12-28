from flask import Flask
from gevent.pywsgi import WSGIServer
import os
app = Flask(__name__)

def gettemp():
    cpu_temp = os.popen("vcgencmd measure_temp").readline()
    return cpu_temp.replace("temp=", "")

@app.route('/', methods=['GET'])
def hello():
    return str(gettemp())
if __name__ == '__main__':
    # Debug/Development
    # app.run(debug=True, host="0.0.0.0", port="5000")

    # Production
    http_server = WSGIServer(('0.0.0.0', 3000), app)
    http_server.serve_forever()
