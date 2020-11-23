import React, { Component } from 'react';
import { Row, Col, Input, Form, DatePicker, Button, Space } from "antd";
import {FileExcelOutlined, SearchOutlined, ClearOutlined} from '@ant-design/icons';
import {FORMAT_FECHA, FORMAT_HOUR} from '../../../constants/index';
import ReactExport from 'react-data-export';
import moment from 'moment';

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;

class QueryFilter extends Component {

    formRef = React.createRef();

    cleanFields= () =>{
        this.formRef.current.resetFields();
    };

    onFinish = values => {
        console.log('vakues',values);
        
    };
    
    render(){  

        const formItemLayout = {
            labelCol: {
              span: 24,
              offset: 0
            },
            wrapperCol: {
                span: 24,
                offset: 0
            }
          };
        
          const exportExcelData = [
            {
              columns: [
                {title: "Referencia", width: {wpx:80}, style: {fill: {patternType: "solid",fgColor: {rgb: "3498DB"}}, font: {bold: true} }, alignment:{horizontal:"center"} },
                {title: "Num.Suministro", width: {wpx:102}, style: {fill: {patternType: "solid",fgColor: {rgb: "3498DB"}}, font: {bold: true}, alignment:{horizontal:"center"}  }},
                {title: "Nombre", width: {wpx:250}, style: {fill: {patternType: "solid",fgColor: {rgb: "3498DB"}}, font: {bold: true}, alignment:{horizontal:"center"}  }},
                {title: "Fec.Vencimiento", width: {wpx:104}, style: {fill: {patternType: "solid",fgColor: {rgb: "3498DB"}}, font: {bold: true}, alignment:{horizontal:"center"} }},
                {title: "Importe", width: {wpx:80}, style: {fill: {patternType: "solid",fgColor: {rgb: "3498DB"}}, font: {bold: true}, alignment:{horizontal:"center"} }},
                {title: "Comisión", width: {wpx:80}, style: {fill: {patternType: "solid",fgColor: {rgb: "3498DB"}}, font: {bold: true}, alignment:{horizontal:"center"} }},
                {title: "Total", width: {wpx:80}, style: {fill: {patternType: "solid",fgColor: {rgb: "3498DB"}}, font: {bold: true}, alignment:{horizontal:"center"} }}
              ],
              data: [
                    [
                        {value: "H1"},
                        {value: "Bold"},
                        {value: "Red"},
                        {value: "Red"},
                        {value: "Red"},
                        {value: "Red"},
                        {value: "Red"},
                    ],
                    [
                        {value: "H6"},
                        {value: "shadow"},
                        {value: "Light Blue"},
                        {value: "Light Blue"},
                        {value: "Light Blue"},
                        {value: "Light Blue"},
                        {value: "Light Blue"}
                    ]
                ]
            }
        ];
              

        return(
            <React.Fragment>
                <Form {...formItemLayout} ref={this.formRef} name="control-ref" onFinish={this.onFinish}>
                    <Row gutter={24}>
                        <Col xs={24} sm={12} md={12} lg={6} xl={6}>
                            <Form.Item
                                name = "referencia"
                                label = "Referencia"
                            >
                                <Input type="text"  placeholder="Ingrese referencia" maxLength={12} />
                            </Form.Item>
                        </Col>
                        <Col xs={24} sm={12} md={12} lg={6} xl={6}>
                            <Form.Item
                                name = "suministro"
                                label = "Num. Suministro"
                            >
                                <Input type="text"  placeholder="Ingrese suministro" maxLength={12} />
                            </Form.Item>
                        </Col>
                        <Col xs={24} sm={12} md={12} lg={6} xl={6}>
                            <Form.Item
                                name = "nombre"
                                label = "Nombre"
                            >
                                <Input type="text"  placeholder="Ingrese nombre" maxLength={12} />
                            </Form.Item>
                        </Col>
                        <Col xs={24} sm={12} md={12} lg={6} xl={6}>
                            <Form.Item
                                name = "fecPago"
                                label = "Fec. Pago"
                            >
                                <DatePicker    style={{width: "100%"}} format = {FORMAT_FECHA.FECHA}/>
                            </Form.Item>
                        </Col>
                    </Row>

                    <Row>
                        <Col span={24} style={{textAlign : 'right'}} >
                            <Form.Item>
                                <Space>
                                    <Button  icon = {<ClearOutlined />} htmlType="button" onClick={this.cleanFields}>
                                        Limpiar
                                    </Button>
                                    <Button  icon={<FileExcelOutlined />} onClick={this.cleanFields}>
                                        Exportar
                                        <ExcelFile 
                                            filename={`RegistroSedalib ${moment().format(FORMAT_HOUR.FORMAT_DATE_HOUR)}`} 
                                            hideElement    
                                        >
                                            <ExcelSheet dataSet={exportExcelData} name="Sedalib"/>
                                        </ExcelFile>
                                    </Button>
                                    <Button icon = {<SearchOutlined />} htmlType="submit">
                                        Buscar
                                    </Button>
                                </Space>
                              
                            </Form.Item> 
                            
                        </Col>
                    </Row>
                </Form>
            </React.Fragment>
        );
    }

}

export default QueryFilter;