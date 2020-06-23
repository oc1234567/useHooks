import { storiesOf } from "@storybook/react";
import { userHooks } from '../src/index'
import React from 'react';

const Demo = () => {
    const result = userHooks();
    return (
        <div>
            <p>{result}</p>
        </div>
    )
}

storiesOf("user", module).add('Demo', Demo);