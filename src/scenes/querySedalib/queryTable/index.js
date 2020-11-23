import React, { Component } from 'react';
import { Table, Tooltip,Space } from 'antd';
import {EditOutlined, DeleteOutlined, PrinterOutlined } from '@ant-design/icons';


class QuerySedalib extends Component {


    render(){
        const dataSource = [
            {
              key: '1',
              referencia: '202008230001',
              numSuministro: 32,
              nombre: '10 Downing Street',
              fecVencimiento: '10/10/2020',
              importe: 100,
              comision: 1,
              total: 101
            },
            {
              key: '2',
              referencia: '202008230002',
              numSuministro: 42,
              nombre: '10 Downing Street',
              fecVencimiento: '10/10/2020',
              importe: 10,
              comision: 1,
              total: 11
            },
          ];
          
          const columns = [
            {
              title: 'Referencia',
              dataIndex: 'referencia',
              key: 'referencia'
            },
            {
              title: 'Num. Suministro',
              dataIndex: 'numSuministro',
              key: 'numSuministro',
            },
            {
              title: 'Nombre',
              dataIndex: 'nombre',
              key: 'nombre',
            },
            {
              title: 'Fec. Vencimiento',
              dataIndex: 'fecVencimiento',
              key: 'fecVencimiento',
            },
            {
              title: 'Importe',
              dataIndex: 'importe',
              key: 'importe',
            },
            {
              title: 'Comisión',
              dataIndex: 'comision',
              key: 'comision',
            },
            {
              title: 'Total',
              dataIndex: 'total',
              key: 'total',
            },
            {
              title: 'Acción',
              dataIndex: 'accion',
              key: 'accion',
              render: (text, record) => (
                
                <Space size="middle">
                  <Tooltip title="Editar">
                    <EditOutlined style={{ fontSize: '16px', color: '#0291e7' }} /> 
                  </Tooltip>
                  <Tooltip title="Eliminar">
                    <DeleteOutlined style={{ fontSize: '16px', color: '#0291e7' }} />
                  </Tooltip>
                  <Tooltip title="Imprimir">
                    <PrinterOutlined style={{ fontSize: '16px', color: '#0291e7' }} />
                  </Tooltip>
                  </Space>
              )
            }
          ];

        return(
            <React.Fragment>
                <Table
                    dataSource={dataSource} 
                    columns={columns}
                    scroll={{y:240}}
                />
            </React.Fragment>
        );
    }

}

export default QuerySedalib;