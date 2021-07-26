const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "user_report",
  password: "123456",
  database: "inventary",
});

app.post("/create", (req, res) => {
  const CODIGO = req.body.CODIGO;
  const ORDEN = req.body.ORDEN;
  const DESCRIPCION = req.body.DESCRIPCION;
  const DESCRIPCION_2 = req.body.DESCRIPCION_2;
  const PROVEEDOR = req.body.PROVEEDOR;
  const LINEA = req.body.LINEA;
  const CARACTERISTICA = req.body.CARACTERISTICA;
  const ESTADO = req.body.ESTADO;
  const CLASE = req.body.CLASE;
  const TEXTO1_FLAG = req.body.TEXTO1_FLAG;
  const TEXTO2_FLAG = req.body.TEXTO2_FLAG;
  const TEXTO3_FLAG = req.body.TEXTO3_FLAG;
  const FACTOR_IMPORTACION = req.body.FACTOR_IMPORTACION;
  const FACTOR_MARGEN = req.body.FACTOR_MARGEN;
  const FACTOR_SEGURIDAD = req.body.FACTOR_SEGURIDAD;
  const FOTO = req.body.FOTO;
  const FICHA_TECNICA = req.body.FICHA_TECNICA;
  const OBSERVACIONES = req.body.OBSERVACIONES;
  const CODIGO_ALTERNO = req.body.CODIGO_ALTERNO;
  const COSTO_COMPRA = req.body.COSTO_COMPRA;
  const DESCUENTO_PROVEEDOR = req.body.DESCUENTO_PROVEEDOR;
  const PRECIO_VENTA = req.body.PRECIO_VENTA;
  const PRECIO_VENTA_ANTERIOR = req.body.PRECIO_VENTA_ANTERIOR;
  const PRECIO_DOLAR = req.body.PRECIO_DOLAR;
  const FLAG_TRAMOS = req.body.FLAG_TRAMOS;
  const DESCUENTO_1 = req.body.DESCUENTO_1;
  const DESCUENTO_2 = req.body.DESCRIPCION_2;
  const FECHA_MOD = req.body.FECHA_MOD;
  const COD_USER_MODIFICA = req.body.COD_USER_MODIFICA;

  db.query(
    `INSERT INTO 
    MA_INVENTARIOS2 ( 
      CODIGO,
      ORDEN,
      DESCRIPCION,
      DESCRIPCION_2,
      PROVEEDOR,
      LINEA,
      CARACTERISTICA,
      ESTADO,
      CLASE,
      TEXTO1_FLAG,
      TEXTO2_FLAG,
      TEXTO3_FLAG,
      FACTOR_IMPORTACION,
      FACTOR_MARGEN,
      FACTOR_SEGURIDAD,
      FOTO,
      FICHA_TECNICA,
      OBSERVACIONES,
      CODIGO_ALTERNO,
      COSTO_COMPRA,
      DESCUENTO_PROVEEDOR,
      PRECIO_VENTA,
      PRECIO_VENTA_ANTERIOR,
      PRECIO_DOLAR,
      FLAG_TRAMOS,
      DESCUENTO_1,
      DESCUENTO_2,
      FECHA_MOD,
      COD_USER_MODIFICA
        ) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`,
    [
      CODIGO,
      ORDEN,
      DESCRIPCION,
      DESCRIPCION_2,
      PROVEEDOR,
      LINEA,
      CARACTERISTICA,
      ESTADO,
      CLASE,
      TEXTO1_FLAG,
      TEXTO2_FLAG,
      TEXTO3_FLAG,
      FACTOR_IMPORTACION,
      FACTOR_MARGEN,
      FACTOR_SEGURIDAD,
      FOTO,
      FICHA_TECNICA,
      OBSERVACIONES,
      CODIGO_ALTERNO,
      COSTO_COMPRA,
      DESCUENTO_PROVEEDOR,
      PRECIO_VENTA,
      PRECIO_VENTA_ANTERIOR,
      PRECIO_DOLAR,
      FLAG_TRAMOS,
      DESCUENTO_1,
      DESCUENTO_2,
      FECHA_MOD,
      COD_USER_MODIFICA,
    ],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values Inserted");
      }
    }
  );
});

app.get("/records", (req, res) => {
  db.query("SELECT * FROM MA_INVENTARIOS2", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.put("/update", (req, res) => {
  const id = req.body.id;
  const CODIGO = req.body.CODIGO;
  const ORDEN = req.body.ORDEN;
  const DESCRIPCION = req.body.DESCRIPCION;
  const DESCRIPCION_2 = req.body.DESCRIPCION_2;
  const PROVEEDOR = req.body.PROVEEDOR;
  const LINEA = req.body.LINEA;
  const CARACTERISTICA = req.body.CARACTERISTICA;
  const ESTADO = req.body.ESTADO;
  const CLASE = req.body.CLASE;
  const TEXTO1_FLAG = req.body.TEXTO1_FLAG;
  const TEXTO2_FLAG = req.body.TEXTO2_FLAG;
  const TEXTO3_FLAG = req.body.TEXTO3_FLAG;
  const FACTOR_IMPORTACION = req.body.FACTOR_IMPORTACION;
  const FACTOR_MARGEN = req.body.FACTOR_MARGEN;
  const FACTOR_SEGURIDAD = req.body.FACTOR_SEGURIDAD;
  const FOTO = req.body.FOTO;
  const FICHA_TECNICA = req.body.FICHA_TECNICA;
  const OBSERVACIONES = req.body.OBSERVACIONES;
  const CODIGO_ALTERNO = req.body.CODIGO_ALTERNO;
  const COSTO_COMPRA = req.body.COSTO_COMPRA;
  const DESCUENTO_PROVEEDOR = req.body.DESCUENTO_PROVEEDOR;
  const PRECIO_VENTA = req.body.PRECIO_VENTA;
  const PRECIO_VENTA_ANTERIOR = req.body.PRECIO_VENTA_ANTERIOR;
  const PRECIO_DOLAR = req.body.PRECIO_DOLAR;
  const FLAG_TRAMOS = req.body.FLAG_TRAMOS;
  const DESCUENTO_1 = req.body.DESCUENTO_1;
  const DESCUENTO_2 = req.body.DESCRIPCION_2;
  const FECHA_MOD = req.body.FECHA_MOD;
  const COD_USER_MODIFICA = req.body.COD_USER_MODIFICA;

  db.query(
    `UPDATE MA_INVENTARIOS2 SET 
      CODIGO = ?, 
      ORDEN = ?, 
      DESCRIPCION = ?,
      DESCRIPCION_2 = ?,
      PROVEEDOR = ?,
      LINEA = ?,
      CARACTERISTICA = ?,
      ESTADO = ?,
      CLASE = ?,
      TEXTO1_FLAG = ?,
      TEXTO2_FLAG = ?,
      TEXTO3_FLAG = ?,
      FACTOR_IMPORTACION = ?,
      FACTOR_MARGEN = ?,
      FACTOR_SEGURIDAD = ?,
      FOTO = ?,
      FICHA_TECNICA = ?,
      OBSERVACIONES = ?,
      CODIGO_ALTERNO = ?,
      COSTO_COMPRA = ?,
      DESCUENTO_PROVEEDOR = ?,
      PRECIO_VENTA = ?,
      PRECIO_VENTA_ANTERIOR = ?,
      PRECIO_DOLAR = ?,
      FLAG_TRAMOS = ?,
      DESCUENTO_1 = ?,
      DESCUENTO_2 = ?,
      FECHA_MOD = ?,
      COD_USER_MODIFICA = ?  
    WHERE id = ?`,

    [
      CODIGO,
      ORDEN,
      DESCRIPCION,
      DESCRIPCION_2,
      PROVEEDOR,
      LINEA,
      CARACTERISTICA,
      ESTADO,
      CLASE,
      TEXTO1_FLAG,
      TEXTO2_FLAG,
      TEXTO3_FLAG,
      FACTOR_IMPORTACION,
      FACTOR_MARGEN,
      FACTOR_SEGURIDAD,
      FOTO,
      FICHA_TECNICA,
      OBSERVACIONES,
      CODIGO_ALTERNO,
      COSTO_COMPRA,
      DESCUENTO_PROVEEDOR,
      PRECIO_VENTA,
      PRECIO_VENTA_ANTERIOR,
      PRECIO_DOLAR,
      FLAG_TRAMOS,
      DESCUENTO_1,
      DESCUENTO_2,
      FECHA_MOD,
      COD_USER_MODIFICA,
      id,
    ],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.delete("/delete/:id", (req, res) => {
  const id = req.params.id;
  db.query("DELETE FROM MA_INVENTARIOS2 WHERE id = ?", id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.listen(3001, () => {
  console.log("Yey, your server is running on port 3001");
});
