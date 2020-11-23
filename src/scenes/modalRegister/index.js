import React, { Component} from 'react';
import { Modal, Row, Col, Form, Input, TimePicker, DatePicker, Button, Divider, Space } from 'antd';
import moment from 'moment';
import {FORMAT_HOUR, FORMAT_FECHA} from '../../constants/index';


class ModalRegister extends Component {
    
    formRef = React.createRef();
    
    onFinish = values => {
        const {onOk} = this.props;
        onOk();
        this.formRef.current.resetFields();
    };
    onFinishFailed = values => {
        console.log('valorFailed',values);
    };
    
    onButtonCancel = () => {
        const {onCancel} = this.props;
        onCancel();
        this.formRef.current.resetFields();
    };

    render(){
        const {visible, confirmLoading,onCancel} = this.props;
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
        return(
            <Modal
                title = "Registrar pago Sedalib"
                visible = {visible}
                maskClosable = {false}
                confirmLoading={confirmLoading}
                footer={null}
                onCancel={onCancel}
            >
                <Form 
                    onFinish={this.onFinish} 
                    onFinishFailed={this.onFinishFailed}
                    {...formItemLayout} 
                    initialValues={{ hora: moment() , fecha: moment()}}
                    ref={this.formRef}
                    >
                    <Row gutter={24}>
                        <Col xs={24} sm={12} md={12} lg={12} xl={12}>
                            <Form.Item
                                name = "hora"
                                label = "Hora" 
                                rules = {[{ required: true}]}                            
                            >
                                <TimePicker 
                                    use12Hours 
                                    style={{width: "100%"}}
                                    format={FORMAT_HOUR.HORA}
                                />
                                
                            </Form.Item>
                        </Col>
                        <Col xs={24} sm={12} md={12} lg={12} xl={12}>
                            <Form.Item
                                name = "fecha"
                                label = "Fecha"
                                rules = {[{ required: true }]}
                            >
                                <DatePicker 
                                    
                                    format = {FORMAT_FECHA.FECHA}
                                    style={{width: "100%"}}
                                />
                            </Form.Item>
                        </Col>
                        <Divider style={{color: '#000000'}} />
                        <Col xs={24} sm={12} md={12} lg={12} xl={12}>
                            <Form.Item
                                name = "suministro"
                                label = "N° Suministro"
                                rules= {[{  required: true }]}
                            >
                                <Input type="text" placeholder="Ingrese suministro" maxLength={11} />
                            </Form.Item>
                        </Col>
                        <Col xs={24} sm={12} md={12} lg={12} xl={12}>
                            <Form.Item
                                name = "fecVencimiento"
                                label = "Fec. Vencimiento"
                                rules = {[{ required: true }]}
                            >
                                <DatePicker format = {FORMAT_FECHA.FECHA} style={{width: "100%"}}/>
                            </Form.Item>
                        </Col>
                        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                            <Form.Item
                                name="nombre"
                                label = "Nombre"
                                rules = {[{ required: true }]}   
                            >
                                <Input type="text" placeholder="Ingrese nombre" maxLength={150} />
                            </Form.Item>
                        </Col>
                        <Col xs={24} sm={12} md={12} lg={12} xl={12}>
                            <Form.Item
                                name = "importe"
                                label = "Importe"
                                rules = {[{ required: true }]}   
                            >
                                <Input type="text" placeholder="Ingrese importe" maxLength={12} />
                            </Form.Item>
                        </Col>
                        <Col xs={24} sm={12} md={12} lg={12} xl={12}>
                            <Form.Item
                                name = "comision"
                                label = "Comisión"
                                rules = {[{ required: true }]}   
                            >
                                <Input type="text" placeholder="Ingrese comision" maxLength={12} />
                            </Form.Item>
                        </Col>
                        <Col xs={24} sm={12} md={12} lg={12} xl={12}>
                            <Form.Item
                                name = "total"
                                label = "Total"
                                rules = {[{ required: true }]}   
                            >
                                <Input type="text" placeholder="Ingrese total" maxLength={12} />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Divider/>
                    <Col  style={{textAlign : 'right'}}>
                        <Form.Item>
                            <Space>
                                <Button key="back" onClick={this.onButtonCancel}>
                                    Cancelar
                                </Button>
                                <Button key="submit" loading={confirmLoading} type="primary" htmlType="submit">
                                    Registrar
                                </Button>
                            </Space>
                
                        </Form.Item>
                    </Col>
                </Form>
            </Modal>
        );
    }
}

export default ModalRegister;