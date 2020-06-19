// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import React from 'react';

import TextWithTooltip from 'src/components/widgets/text_with_tooltip';
import Spinner from 'src/components/assets/icons/spinner';
import {Incident} from 'src/types/incident';
import {RHSState} from 'src/types/rhs';

import './rhs_title.scss';

interface Props {
    rhsState: RHSState;
    incident: Incident;
    isLoading: boolean;
    actions: {
        setRHSState: (state: RHSState) => void;
    };
}

export default function RHSTitle(props: Props) {
    const goBack = () => {
        props.actions.setRHSState(RHSState.List);
    };

    return (
        <div className='rhs-incident-title'>
            {
                props.isLoading &&
                <Spinner/>
            }
            {
                props.rhsState === RHSState.List && !props.isLoading &&
                <React.Fragment>
                    <TextWithTooltip
                        id={'title'}
                        className='title'
                        text={'Incident List'}
                    />
                </React.Fragment>
            }
            {
                props.rhsState !== RHSState.List && !props.isLoading &&
                <React.Fragment>
                    <div className='incident-details'>
                        <i
                            className='fa fa-angle-left'
                            onClick={goBack}
                        />
                        <TextWithTooltip
                            id={'title'}
                            className='title'
                            text={props.incident.name}
                        />
                    </div>
                </React.Fragment>
            }
        </div>
    );
}
