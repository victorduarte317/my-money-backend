<<<<<<< HEAD
import React, { Component } from 'react'
=======
import React from 'react'
>>>>>>> a124684902aa2e1949eeef1cdf83e2bb30378030

import Grid from '../common/layout/grid'
import Row from '../common/layout/row'
import ValueBox from '../common/widget/valueBox'

export default ({credit, debt}) => (
<<<<<<< HEAD
    <Grid cols='8'>
        <fieldset>
            <legend>Summary</legend>
            <Row>
                <ValueBox cols='10 3' color='green' icon='bank'
                    value={`USD ${credit}`} text='Credits - Total' />

                <ValueBox cols='10 3' color='red' icon='credit-card'
                    value={`USD ${debt}`} text='Debts - Total' />

                <ValueBox cols='10 3' color='blue' icon='money'
=======
    <Grid cols='12'>
        <fieldset>
            <legend>Summary</legend>
            <Row>
                <ValueBox cols='12 4' color='green' icon='bank'
                    value={`USD ${credit}`} text='Credits - Total' />

                <ValueBox cols='12 4' color='red' icon='credit-card'
                    value={`USD ${debt}`} text='Debts - Total' />

                <ValueBox cols='12 4' color='blue' icon='money'
>>>>>>> a124684902aa2e1949eeef1cdf83e2bb30378030
                    value={`USD ${credit - debt}`} text='Net amount' />
            </Row>
        </fieldset>
    </Grid>
)