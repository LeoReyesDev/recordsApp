import "./App.css";
import { useState } from "react";
import Axios from "axios";

function App() {
  //Setting Vars
  const [codigo, setCodigo] = useState("");
  const [orden, setOrden] = useState(0);
  const [descripcion, setDescripcion] = useState("");
  const [descripcion2, setDescripcion2] = useState("");
  const [provedor, setProvedor] = useState(0);
  const [linea, setLinea] = useState(0);
  const [caracteristica, setCaracteristica] = useState("");
  const [estado, setEstado] = useState("");
  const [clase, setClase] = useState("");
  const [texto1_flag, setTexto1] = useState("");
  const [texto2_flag, setTexto2] = useState("");
  const [texto3_flag, setTexto3] = useState("");
  const [factorImportacion, setFactorImportacion] = useState(0);
  const [factorImagen, setFactorImagen] = useState(0);
  const [factorSeguridad, setFactorSeguridad] = useState(0);
  const [foto, setFoto] = useState("");
  const [fichaTecnica, setFichaTecnica] = useState("");
  const [observaciones, setObservaciones] = useState("");
  const [codigoAlterno, setCodigoAlterno] = useState("");
  const [costodeCompra, setCostodeCompra] = useState(0);
  const [descuentoProveedor, setDescuentoProveedor] = useState(0);
  const [preciodeVenta, setPreciodeVenta] = useState(0);
  const [preciodeVentaAnterior, setPreciodeVentaAnterior] = useState(0);
  const [precioDolar, setPrecioDolar] = useState(0);
  const [flagTramos, setFlagTramos] = useState("");
  const [descuento1, setDescuento1] = useState(0);
  const [descuento2, setDescuento2] = useState(0);
  const [fechaModifica, setFechaModifica] = useState("");
  const [codeUserModifica, setCodeUserModifica] = useState(0);

  const [recordList, setRecordList] = useState([]);

  const addEmployee = () => {
    //Setting For add Record
    console.log("RECORD-LIST", recordList);
    Axios.post("http://localhost:3001/create", {
      CODIGO: codigo,
      ORDEN: orden,
      DESCRIPCION: descripcion,
      DESCRIPCION_2: descripcion2,
      PROVEEDOR: provedor,
      LINEA: linea,
      CARACTERISTICA: caracteristica,
      ESTADO: estado,
      CLASE: clase,
      TEXTO1_FLAG: texto1_flag,
      TEXTO2_FLAG: texto2_flag,
      TEXTO3_FLAG: texto3_flag,
      FACTOR_IMPORTACION: factorImportacion,
      FACTOR_MARGEN: factorImagen,
      FACTOR_SEGURIDAD: factorSeguridad,
      FOTO: foto,
      FICHA_TECNICA: fichaTecnica,
      OBSERVACIONES: observaciones,
      CODIGO_ALTERNO: codigoAlterno,
      COSTO_COMPRA: costodeCompra,
      DESCUENTO_PROVEEDOR: descuentoProveedor,
      PRECIO_VENTA: preciodeVenta,
      PRECIO_VENTA_ANTERIOR: preciodeVentaAnterior,
      PRECIO_DOLAR: precioDolar,
      FLAG_TRAMOS: flagTramos,
      DESCUENTO_1: descuento1,
      DESCUENTO_2: descuento2,
      FECHA_MOD: fechaModifica,
      COD_USER_MODIFICA: codeUserModifica,
    }).then(() => {
      setRecordList([
        ...recordList,
        {
          CODIGO: codigo,
          ORDEN: orden,
          DESCRIPCION: descripcion,
          DESCRIPCION_2: descripcion2,
          PROVEEDOR: provedor,
          LINEA: linea,
          CARACTERISTICA: caracteristica,
          ESTADO: estado,
          CLASE: clase,
          TEXTO1_FLAG: texto1_flag,
          TEXTO2_FLAG: texto2_flag,
          TEXTO3_FLAG: texto3_flag,
          FACTOR_IMPORTACION: factorImportacion,
          FACTOR_MARGEN: factorImagen,
          FACTOR_SEGURIDAD: factorSeguridad,
          FOTO: foto,
          FICHA_TECNICA: fichaTecnica,
          OBSERVACIONES: observaciones,
          CODIGO_ALTERNO: codigoAlterno,
          COSTO_COMPRA: costodeCompra,
          DESCUENTO_PROVEEDOR: descuentoProveedor,
          PRECIO_VENTA: preciodeVenta,
          PRECIO_VENTA_ANTERIOR: preciodeVentaAnterior,
          PRECIO_DOLAR: precioDolar,
          FLAG_TRAMOS: flagTramos,
          DESCUENTO_1: descuento1,
          DESCUENTO_2: descuento2,
          FECHA_MOD: fechaModifica,
          COD_USER_MODIFICA: codeUserModifica,
        },
      ]);
    });
  };

  const getEmployees = () => {
    Axios.get("http://localhost:3001/records").then((response) => {
      setRecordList(response.data);
    });
  };

  const updateRecord = (id) => {
    console.log("POST DATA: ", id, "RecordList", recordList);

    Axios.put("http://localhost:3001/update", {
      id: id,
      CODIGO: codigo,
      ORDEN: orden,
      DESCRIPCION: descripcion,
      DESCRIPCION_2: descripcion2,
      PROVEEDOR: provedor,
      LINEA: linea,
      CARACTERISTICA: caracteristica,
      ESTADO: estado,
      CLASE: clase,
      TEXTO1_FLAG: texto1_flag,
      TEXTO2_FLAG: texto2_flag,
      TEXTO3_FLAG: texto3_flag,
      FACTOR_IMPORTACION: factorImportacion,
      FACTOR_MARGEN: factorImagen,
      FACTOR_SEGURIDAD: factorSeguridad,
      FOTO: foto,
      FICHA_TECNICA: fichaTecnica,
      OBSERVACIONES: observaciones,
      CODIGO_ALTERNO: codigoAlterno,
      COSTO_COMPRA: costodeCompra,
      DESCUENTO_PROVEEDOR: descuentoProveedor,
      PRECIO_VENTA: preciodeVenta,
      PRECIO_VENTA_ANTERIOR: preciodeVentaAnterior,
      PRECIO_DOLAR: precioDolar,
      FLAG_TRAMOS: flagTramos,
      DESCUENTO_1: descuento1,
      DESCUENTO_2: descuento2,
      FECHA_MOD: fechaModifica,
      COD_USER_MODIFICA: codeUserModifica,
    }).then((response) => {
      console.log("SAVE DATA: ", id, "Record Update: ", recordList);
      setRecordList(
        recordList.map((val) => {
          return val.id === id
            ? {
                id: val.id,
                CODIGO: val.codigo,
                ORDEN: val.orden,
                DESCRIPCION: val.descripcion,
                DESCRIPCION_2: val.descripcion2,
                PROVEEDOR: val.provedor,
                LINEA: val.linea,
                CARACTERISTICA: val.caracteristica,
                ESTADO: val.estado,
                CLASE: val.clase,
                TEXTO1_FLAG: val.texto1_flag,
                TEXTO2_FLAG: val.texto2_flag,
                TEXTO3_FLAG: val.texto3_flag,
                FACTOR_IMPORTACION: val.factorImportacion,
                FACTOR_MARGEN: val.factorImagen,
                FACTOR_SEGURIDAD: val.factorSeguridad,
                FOTO: val.foto,
                FICHA_TECNICA: val.fichaTecnica,
                OBSERVACIONES: val.observaciones,
                CODIGO_ALTERNO: val.codigoAlterno,
                COSTO_COMPRA: val.costodeCompra,
                DESCUENTO_PROVEEDOR: val.descuentoProveedor,
                PRECIO_VENTA: val.preciodeVenta,
                PRECIO_VENTA_ANTERIOR: val.preciodeVentaAnterior,
                PRECIO_DOLAR: val.precioDolar,
                FLAG_TRAMOS: val.flagTramos,
                DESCUENTO_1: val.descuento1,
                DESCUENTO_2: val.descuento2,
                FECHA_MOD: val.fechaModifica,
                COD_USER_MODIFICA: val.codeUserModifica,
              }
            : val;
        })
      );
    });
  };

  const deleteRecord = (id) => {
    Axios.delete(`http://localhost:3001/delete/${id}`).then((response) => {
      setRecordList(
        recordList.filter((val) => {
          return val.id !== id;
        })
      );
    });
  };

  return (
    <div className="App">
      <div className="information">
        <label>Codigo:</label>
        <input
          required={true}
          type="text"
          value={codigo}
          onChange={(event) => {
            setCodigo(event.target.value);
          }}
        />
        <label>Orden:</label>
        <input
          type="text"
          pattern="[^0-9]+"
          value={orden}
          onChange={(event) => {
            setOrden(event.target.value);
          }}
        />
        <label>Descripcion:</label>
        <input
          type="text"
          value={descripcion}
          onChange={(event) => {
            setDescripcion(event.target.value);
          }}
        />
        <label>Descripcion2:</label>
        <input
          type="text"
          value={descripcion2}
          onChange={(event) => {
            setDescripcion2(event.target.value);
          }}
        />
        <label>Proveedor:</label>
        <input
          type="text"
          value={provedor}
          onChange={(event) => {
            setProvedor(event.target.value);
          }}
        />
        <label>Linea:</label>
        <input
          type="text"
          value={linea}
          onChange={(event) => {
            setLinea(event.target.value);
          }}
        />
        <label>Caracteristica:</label>
        <input
          type="text"
          value={caracteristica}
          onChange={(event) => {
            setCaracteristica(event.target.value);
          }}
        />
        <label>Estado:</label>
        <input
          type="text"
          value={estado}
          onChange={(event) => {
            setEstado(event.target.value);
          }}
        />
        <label>Clase:</label>
        <input
          type="text"
          value={clase}
          onChange={(event) => {
            setClase(event.target.value);
          }}
        />
        <label>Texto1 Flag:</label>
        <input
          type="text"
          value={texto1_flag}
          onChange={(event) => {
            setTexto1(event.target.value);
          }}
        />
        <label>Texto2 Flag:</label>
        <input
          type="text"
          value={texto2_flag}
          onChange={(event) => {
            setTexto2(event.target.value);
          }}
        />
        <label>Texto3 Flag:</label>
        <input
          type="text"
          value={texto3_flag}
          onChange={(event) => {
            setTexto3(event.target.value);
          }}
        />
        <label>Factor Importacion:</label>
        <input
          type="text"
          value={factorImportacion}
          onChange={(event) => {
            setFactorImportacion(event.target.value);
          }}
        />
        <label>Factor Margen:</label>
        <input
          type="text"
          value={factorImagen}
          onChange={(event) => {
            setFactorImagen(event.target.value);
          }}
        />
        <label>Factor Seguridad:</label>
        <input
          type="text"
          value={factorSeguridad}
          onChange={(event) => {
            setFactorSeguridad(event.target.value);
          }}
        />
        <label>Foto:</label>
        <input
          type="text"
          value={foto}
          onChange={(event) => {
            setFoto(event.target.value);
          }}
        />
        <label>FichaTecnica:</label>
        <input
          type="text"
          value={fichaTecnica}
          onChange={(event) => {
            setFichaTecnica(event.target.value);
          }}
        />
        <label>Observaciones:</label>
        <input
          type="text"
          value={observaciones}
          onChange={(event) => {
            setObservaciones(event.target.value);
          }}
        />

        <label>Codigo Alterno:</label>
        <input
          type="text"
          value={codigoAlterno}
          onChange={(event) => {
            setCodigoAlterno(event.target.value);
          }}
        />
        <label>Costo de compra:</label>
        <input
          type="text"
          value={costodeCompra}
          onChange={(event) => {
            setCostodeCompra(event.target.value);
          }}
        />
        <label>Descuento Proveedor:</label>
        <input
          type="text"
          value={descuentoProveedor}
          onChange={(event) => {
            setDescuentoProveedor(event.target.value);
          }}
        />
        <label>Precio de Venta:</label>
        <input
          type="text"
          value={preciodeVenta}
          onChange={(event) => {
            setPreciodeVenta(event.target.value);
          }}
        />
        <label>Precio de Venta Anterior:</label>
        <input
          type="text"
          value={preciodeVentaAnterior}
          onChange={(event) => {
            setPreciodeVentaAnterior(event.target.value);
          }}
        />
        <label>Precio de Dolar:</label>
        <input
          type="text"
          value={precioDolar}
          onChange={(event) => {
            setPrecioDolar(event.target.value);
          }}
        />
        <label>Flag Tramos:</label>
        <input
          type="text"
          value={flagTramos}
          onChange={(event) => {
            setFlagTramos(event.target.value);
          }}
        />
        <label>Descuento 1:</label>
        <input
          type="text"
          value={descuento1}
          onChange={(event) => {
            setDescuento1(event.target.value);
          }}
        />
        <label>Descuento 2:</label>
        <input
          type="text"
          value={descuento2}
          onChange={(event) => {
            setDescuento2(event.target.value);
          }}
        />
        <label>Fecha Modificacion:</label>
        <input
          type="text"
          value={fechaModifica}
          onChange={(event) => {
            setFechaModifica(event.target.value);
          }}
        />
        <label>Code User Modifica:</label>
        <input
          type="text"
          value={codeUserModifica}
          onChange={(event) => {
            setCodeUserModifica(event.target.value);
          }}
        />

        <button onClick={addEmployee}>Guardar Registro</button>
      </div>
      <div className="employees">
        <button onClick={getEmployees}>Ver Registros Guardados</button>

        {recordList.map((val, key) => {
          return (
            <div key={key} className="employee">
              <div style={{ width: "100%", backgroundColor: "red" }}>
                <h2>ID: {val.id}</h2>
              </div>
              <div>
                <h3>codigo:</h3>
                <h3>orden: </h3>
                <h3>descripcion: </h3>
                <h3>descripcion2: </h3>
                <h3>provedor: </h3>
                <h3>linea: </h3>
                <h3>caracteristica: </h3>
                <h3>estado: </h3>
                <h3>clase: </h3>
                <h3>texto1_flag: </h3>
                <h3>texto2_flag: </h3>
                <h3>texto3_flag: </h3>
                <h3>factorImportacion: </h3>
                <h3>factor Margen: </h3>
                <h3>factorSeguridad: </h3>
                <h3>foto:</h3>
                <h3>fichaTecnica:</h3>
                <h3>observaciones:</h3>
                <h3>codigoAlterno:</h3>
                <h3>costodeCompra: </h3>
                <h3>descuentoProveedor:</h3>
                <h3>preciodeVenta: </h3>
                <h3>preciodeVentaAnterior: </h3>
                <h3>precioDolar: </h3>
                <h3>flagTramos: </h3>
                <h3>descuento1: </h3>
                <h3>descuento2:</h3>
                <h3>fechaModifica:</h3>
                <h3>codeUserModifica:</h3>
              </div>

              <div>
                <input
                  type="text"
                  placeholder={val.CODIGO}
                  value={codigo}
                  onChange={(event) => {
                    setCodigo(event.target.value);
                    console.log("codigo", event.target.value);
                  }}
                />
                <input
                  type="text"
                  placeholder={val.ORDEN}
                  value={orden}
                  onChange={(event) => {
                    setOrden(event.target.value);
                    console.log("orden", event.target.value);
                  }}
                />
                <input
                  type="text"
                  placeholder={val.DESCRIPCION}
                  value={descripcion}
                  onChange={(event) => {
                    setDescripcion(event.target.value);
                  }}
                />
                <input
                  type="text"
                  placeholder={val.DESCRIPCION_2}
                  value={descripcion2}
                  onChange={(event) => {
                    setDescripcion2(event.target.value);
                  }}
                />
                <input
                  type="text"
                  placeholder={val.PROVEEDOR}
                  value={provedor}
                  onChange={(event) => {
                    setProvedor(event.target.value);
                  }}
                />
                <input
                  type="text"
                  placeholder={val.LINEA}
                  value={linea}
                  onChange={(event) => {
                    setLinea(event.target.value);
                  }}
                />
                <input
                  type="text"
                  placeholder={val.CARACTERISTICA}
                  value={caracteristica}
                  onChange={(event) => {
                    setCaracteristica(event.target.value);
                  }}
                />
                <input
                  type="text"
                  placeholder={val.ESTADO}
                  value={estado}
                  onChange={(event) => {
                    setEstado(event.target.value);
                  }}
                />
                <input
                  type="text"
                  placeholder={val.CLASE}
                  value={clase}
                  onChange={(event) => {
                    setClase(event.target.value);
                  }}
                />
                <input
                  type="text"
                  placeholder={val.TEXTO1_FLAG}
                  value={texto1_flag}
                  onChange={(event) => {
                    setTexto1(event.target.value);
                  }}
                />
                <input
                  type="text"
                  placeholder={val.TEXTO2_FLAG}
                  value={texto2_flag}
                  onChange={(event) => {
                    setTexto2(event.target.value);
                  }}
                />
                <input
                  type="text"
                  placeholder={val.TEXTO3_FLAG}
                  value={texto3_flag}
                  onChange={(event) => {
                    setTexto3(event.target.value);
                  }}
                />
                <input
                  type="text"
                  placeholder={val.FACTOR_IMPORTACION}
                  value={factorImportacion}
                  onChange={(event) => {
                    setFactorImportacion(event.target.value);
                  }}
                />
                <input
                  type="text"
                  placeholder={val.FACTOR_MARGEN}
                  value={factorImagen}
                  onChange={(event) => {
                    setFactorImagen(event.target.value);
                  }}
                />
                <input
                  type="text"
                  placeholder={val.FACTOR_SEGURIDAD}
                  value={factorSeguridad}
                  onChange={(event) => {
                    setFactorSeguridad(event.target.value);
                  }}
                />
                <input
                  type="text"
                  placeholder={val.FOTO}
                  value={foto}
                  onChange={(event) => {
                    setFoto(event.target.value);
                  }}
                />
                <input
                  type="text"
                  placeholder={val.FICHA_TECNICA}
                  value={fichaTecnica}
                  onChange={(event) => {
                    setFichaTecnica(event.target.value);
                  }}
                />
                <input
                  type="text"
                  placeholder={val.OBSERVACIONES}
                  value={observaciones}
                  onChange={(event) => {
                    setObservaciones(event.target.value);
                  }}
                />
                <input
                  type="text"
                  placeholder={val.CODIGO_ALTERNO}
                  value={codigoAlterno}
                  onChange={(event) => {
                    setCodigoAlterno(event.target.value);
                  }}
                />
                <input
                  type="text"
                  placeholder={val.COSTO_COMPRA}
                  value={costodeCompra}
                  onChange={(event) => {
                    setCostodeCompra(event.target.value);
                  }}
                />
                <input
                  type="text"
                  placeholder={val.DESCUENTO_PROVEEDOR}
                  value={descuentoProveedor}
                  onChange={(event) => {
                    setDescuentoProveedor(event.target.value);
                  }}
                />
                <input
                  type="text"
                  placeholder={val.PRECIO_VENTA}
                  value={preciodeVenta}
                  onChange={(event) => {
                    setPreciodeVenta(event.target.value);
                  }}
                />
                <input
                  type="text"
                  placeholder={val.PRECIO_VENTA_ANTERIOR}
                  value={preciodeVentaAnterior}
                  onChange={(event) => {
                    setPreciodeVentaAnterior(event.target.value);
                  }}
                />

                <input
                  type="text"
                  placeholder={val.PRECIO_DOLAR}
                  value={precioDolar}
                  onChange={(event) => {
                    setPrecioDolar(event.target.value);
                  }}
                />
                <input
                  type="text"
                  placeholder={val.FLAG_TRAMOS}
                  value={flagTramos}
                  onChange={(event) => {
                    setFlagTramos(event.target.value);
                  }}
                />
                <input
                  type="text"
                  placeholder={val.DESCUENTO_1}
                  value={descuento1}
                  onChange={(event) => {
                    setDescuento1(event.target.value);
                  }}
                />
                <input
                  type="text"
                  placeholder={val.DESCUENTO_2}
                  value={descuento2}
                  onChange={(event) => {
                    setDescuento2(event.target.value);
                  }}
                />
                <input
                  type="text"
                  placeholder={val.FECHA_MOD}
                  value={fechaModifica}
                  onChange={(event) => {
                    setFechaModifica(event.target.value);
                  }}
                />
                <input
                  type="text"
                  placeholder={val.COD_USER_MODIFICA}
                  value={codeUserModifica}
                  onChange={(event) => {
                    setCodeUserModifica(event.target.value);
                  }}
                />
                <button
                  className="update"
                  onClick={() => {
                    updateRecord(val.id);
                  }}
                >
                  {" "}
                  Update
                </button>
                <button
                  className="delete"
                  onClick={() => {
                    //console.log("VAL:", val.id);
                    deleteRecord(val.id);
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
