from flask import Flask, render_template
import pymysql
import logging
from datetime import timedelta,date
import os
from dotenv import load_dotenv

app = Flask(__name__)

tomorrow = date.today() + timedelta(days=1)
dayn = tomorrow.day  # 明天 日
mon = tomorrow.month
day = f'{mon}/{dayn}'  # 9/29

try:
    # 連接資料庫
    load_dotenv()
    # 讀取帳號密碼文件
    host = os.getenv('host')  # 資料庫位址
    username_ = os.getenv('username_')  # 資料庫帳號
    database = os.getenv('database')  # 資料庫名稱
    password = os.getenv('password')  # 資料庫密碼
    port = eval(os.getenv('port'))  # 資料庫埠號

    db = pymysql.connect(host=host,
                         user=username_,
                         port=port,
                         database=database,
                         password=password)
    cursor = db.cursor()

    cursor.execute(
        f"SELECT date_time, price FROM weddata WHERE date_time = '{tomorrow}';"
    )
    
    results = cursor.fetchall()  # 接傳回值 type: tuple
    gain = results[0][1]
except:
    gain = 2.01
    logging.error("MySQL can not connect.")

@app.route("/")
def home():

    return render_template("index.html", gain=gain, day=day)

if __name__ == "__main__":
    app.run(debug=True)
