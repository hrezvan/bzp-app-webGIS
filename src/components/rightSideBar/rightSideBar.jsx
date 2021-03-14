import React, { Component } from 'react';
import {  Button , Drawer , Space  } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import './rightSideBar.scss';

class RightSideBar extends Component {

    render() {
        const {placement , visible}=this.props;
        return ( 
            <>
                <Space>
                    <Button id='menuOutlined' onClick={()=>this.props.onShowDrawer()}>
                        <MenuOutlined />
                    </Button>
                </Space>
                <Drawer
                    title="منو"
                    placement={placement}
                    closable={true}
                    onClose={()=>this.props.onCloseDrawer()}
                    visible={visible}
                    key={placement}
                    className='content'
                >
                    <p>آپشن اول</p>
                    <p>آپشن دوم</p>
                    <p>آپشن سوم</p>
                </Drawer>
            </>
        );
    }
}

export default RightSideBar;