
CREATE TABLE `MA_INVENTARIOS2` (
  `CODIGO` varchar(255) DEFAULT NULL,
  `ORDEN` int(11) DEFAULT NULL,
  `DESCRIPCION` varchar(255) DEFAULT NULL,
  `DESCRIPCION_2` varchar(255) DEFAULT NULL,
  `PROVEEDOR` int(11) DEFAULT NULL,
  `LINEA` int(11) DEFAULT NULL,
  `CARACTERISTICA` varchar(255) DEFAULT NULL,
  `ESTADO` varchar(255) DEFAULT NULL,
  `CLASE` varchar(255) DEFAULT NULL,
  `TEXTO1_FLAG` varchar(255) DEFAULT NULL,
  `TEXTO2_FLAG` varchar(255) DEFAULT NULL,
  `TEXTO3_FLAG` varchar(255) DEFAULT NULL,
  `FACTOR_IMPORTACION` int(11) DEFAULT NULL,
  `FACTOR_MARGEN` int(11) DEFAULT NULL,
  `FACTOR_SEGURIDAD` int(11) DEFAULT NULL,
  `FOTO` varchar(255) DEFAULT NULL,
  `FICHA_TECNICA` varchar(255) DEFAULT NULL,
  `OBSERVACIONES` varchar(255) DEFAULT NULL,
  `CODIGO_ALTERNO` varchar(3255) DEFAULT NULL,
  `COSTO_COMPRA` int(11) DEFAULT NULL,
  `DESCUENTO_PROVEEDOR` int(11) DEFAULT NULL,
  `PRECIO_VENTA` int(11) DEFAULT NULL,
  `PRECIO_VENTA_ANTERIOR` int(11) DEFAULT NULL,
  `PRECIO_DOLAR` int(11) DEFAULT NULL,
  `FLAG_TRAMOS` varchar(255) DEFAULT NULL,
  `DESCUENTO_1` int(11) DEFAULT NULL,
  `DESCUENTO_2` int(11) DEFAULT NULL,
  `FECHA_MOD` date DEFAULT NULL,
  `COD_USER_MODIFICA` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `MA_INVENTARIOS2`
--

INSERT INTO `MA_INVENTARIOS2` (`CODIGO`, `ORDEN`, `DESCRIPCION`, `DESCRIPCION_2`, `PROVEEDOR`, `LINEA`, `CARACTERISTICA`, `ESTADO`, `CLASE`, `TEXTO1_FLAG`, `TEXTO2_FLAG`, `TEXTO3_FLAG`, `FACTOR_IMPORTACION`, `FACTOR_MARGEN`, `FACTOR_SEGURIDAD`, `FOTO`, `FICHA_TECNICA`, `OBSERVACIONES`, `CODIGO_ALTERNO`, `COSTO_COMPRA`, `DESCUENTO_PROVEEDOR`, `PRECIO_VENTA`, `PRECIO_VENTA_ANTERIOR`, `PRECIO_DOLAR`, `FLAG_TRAMOS`, `DESCUENTO_1`, `DESCUENTO_2`, `FECHA_MOD`, `COD_USER_MODIFICA`) VALUES
('001', 2, 'Descriptions 1', 'Description 1', 12, 22, 'NUEVO', 'NUEVO', 'ABC', 'TEXTO 1', 'Textp 2', 'Texto 3', 121, 222, 222, 'Aqui va la imagen', 'Nuevo producto de ingreso\r\n', 'Producto de nuevo', '2121', 2122121, 21212, 2121, 212121, 4300, 'Flag de tramos', 12121, 2121, '2021-07-15', 222),
('002', 3, 'Descriptions w', 'Description 1', 12, 22, 'NUEVO', 'NUEVO', 'ABC', 'TEXTO 1', 'Textp 2', 'Texto 3', 121, 222, 222, 'Aqui va la imagen', 'Nuevo producto de ingreso\r\n', 'Producto de nuevo', '2121', 2122121, 21212, 2121, 212121, 4300, 'Flag de tramos', 12121, 2121, '2021-07-15', 222);