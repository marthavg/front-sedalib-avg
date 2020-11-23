import React, { Component } from 'react';
import { Button, Col } from "antd";
import QuerySedalib from '../scenes/querySedalib/queryTable/index';
import QueryFilter from '../scenes/querySedalib/queryFilter/index';
import ModalRegister from '../scenes/modalRegister/index';

class Scenes extends Component{
    state = {
        visible: false,
        confirmLoading: false,
    };
    
    showModal = () => {
    this.setState({
        visible: true,
    });
    };

    handleCancel = () => {
    this.setState({
        visible: false,
    });
    };
    
    handleOk = (e) => {
    this.setState({
        confirmLoading: true,
        visible: false,
    });
    };
    
      render() {
        const { visible, confirmLoading } = this.state;
        return (
          <React.Fragment>
              <h1 style={{textAlign: 'center'}}>Comercial Vargas</h1>
                <Col className="seccion_claims" style={{textAlign : 'center'}} >
                  <Button type="primary" shape="round" size='large' style={{ width : "100%"}} onClick={this.showModal}>
                    Registrar
                  </Button>
                  <ModalRegister
                    visible= {visible}
                    onCancel = {this.handleCancel} 
                    onOk = {this.handleOk}
                    confirmLoading = {confirmLoading}
                  />
                </Col>
                <Col className="seccion_claims">
                  <QueryFilter/>
                </Col>
              <Col className="seccion_claims">
                <QuerySedalib/>
              </Col>
          </React.Fragment>
        );
    
      }
}

export default Scenes;

