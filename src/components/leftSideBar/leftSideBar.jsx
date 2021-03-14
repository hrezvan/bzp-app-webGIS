import React, { Component } from 'react';
import {  Button , Drawer , Space  } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import './leftSideBar.scss';

class LeftSideBar extends Component {

    render() {
        const {placement , visible}=this.props;
        return ( 
            <>
                <Space>
                    <Button type='primary' id='leftSideButton' onClick={()=>this.props.onShowDrawer()}>
                        {/* <MenuOutlined /> */}
                        Left Sidebar
                    </Button>
                </Space>
                <Drawer
                    title="منو"
                    placement={placement}
                    closable={true}
                    onClose={()=>this.props.onCloseDrawer()}
                    visible={visible}
                    key={placement}
                    className='leftDrawer'
                    zIndex={5}
                >
                    <p>آپشن اول</p>
                    <p>آپشن دوم</p>
                    <p>آپشن سوم</p>
                </Drawer>
            </>
        );
    }
}

export default LeftSideBar;