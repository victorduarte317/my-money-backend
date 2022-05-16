import React, { Component } from 'react'
import { connect } from 'react-redux'

import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'
import ValueBox from '../common/widget/valueBox'
import { bindActionCreators } from 'redux'
import { getSummary } from './dashboardActions'

class Dashboard extends Component {

    componentWillMount() {
        this.props.getSummary()
    }

    render() {
        const { credit, debt } = this.props.summary
        return (
            <div>
                <ContentHeader title='Dashboard' small='Version 1.0' />
                <Content>
                        <ValueBox cols='12 4' color='green' icon='bank'
                            value={`${credit} USD`} text='Credits total' />
                        
                        <ValueBox cols='12 4' color='red' icon='credit-card'
                            value={`${debt} USD`} text='Debts total' />

                        <ValueBox cols='12 4' color='blue' icon='money'
                            value={`${credit - debt} USD`} text='Net amount' />
                </Content>
            </div>
        )
    }
}

const mapStateToProps = state => ({summary: state.dashboard.summary})
const mapDispatchToProps = dispatch => bindActionCreators({getSummary}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)