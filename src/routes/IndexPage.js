import React from 'react';
import { connect } from 'dva';
import { Table, Tag, Button, Tooltip, Modal } from 'antd';
import styles from './IndexPage.css'
class Demo extends React.Component {
    state = { visible: false };
    componentDidMount() {
        this.props.dispatch({
            type: 'requestData/test',
        })
        console.log(this);
    }

    render() {
        const columns = [
            {
                title: '姓名',
                key: 'name',
                dataIndex: 'name',
            }, {
                title: '描述',
                key: 'description',
                dataIndex: 'description',
                width: 300,
                className: styles.fontStyle,
                render: text => <Tooltip title={text}>
                    <p>{text}</p>
                </Tooltip>
            }, {
                title: '图片',
                key: 'image',
                dataIndex: 'image',
                render: imgSource => <img src={imgSource} style={{ width: 100 }} alt=''/>
            }, {
                title: 'humanURL',
                key: 'humanURL',
                dataIndex: 'humanURL',
                render: href => <a href={href}>humanURL链接</a>
            }, {
                title: 'baseURL',
                key: 'baseURL',
                dataIndex: 'baseURL',
                render: href => <a href={href}>baseURL链接</a>
            }, {
                title: '标签',
                key: 'tags',
                dataIndex: 'tags',
                width: 300,
                render: (item, index) => {
                    const tagArr = [];
                    item.forEach((item, index) => {
                        tagArr.push(<Tag color="magenta" key={index}>{item}</Tag>)
                    })
                    return tagArr
                }
            }, {
                title: '属性',
                key: 'properties',
                dataIndex: 'properties',
                render: (item, index) => (<div>
                    <Button type="primary" onClick={() => this.setState({ visible: true})}>点击试试</Button>
                    <Modal
                        title="项目详情展示"
                        visible={this.state.visible}
                        mask={false}
                        onOk={() => this.setState({ visible: false})}
                        onCancel={() => this.setState({ visible: false})}
                        okText="确认"
                        cancelText="取消"
                    >
                        <Table
                            rowKey={columns => columns.type}
                            columns={[{
                                title: '类型',
                                key: 'type',
                                dataIndex: 'type',
                            }, {
                                title: 'url链接',
                                key: 'url',
                                dataIndex: 'url',
                            }]}
                            dataSource={item}
                            pagination={true} />
                    </Modal>

                </div>)
            }, {
                title: 'contact',
                key: 'contact',
                dataIndex: 'contact',
                render: (item, index) => (item[0].FN)
            }
        ];
        const data = this.props.requestData.data;
        return (
            <div>
                <Table
                    rowKey={columns => columns.name}
                    columns={columns}
                    dataSource={data}
                    pagination={true}
                />
            </div>
        )
    }
}
export default connect(({ requestData }) => ({
    requestData,
}))(Demo);