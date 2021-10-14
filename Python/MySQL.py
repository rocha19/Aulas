import mysql.connetor


con = mysql.connector.connect(host='localhost', database='nomedoarquivoDB', user='usuario', password='senha')


if con.is_connected():
    db_info = con.get_server_info()
    print("conectado ao servidor MySLQ versão ", db_info)
    cursor = con.cursor()
    cursor.execute("select database();")
    linha = cursor.fetchone()
    print("conectado ao banco de dados ", linha)

if con.is_connected:
    cursor.close()
    con.close()
    print("Conexão ao MySQL foi encerrado")