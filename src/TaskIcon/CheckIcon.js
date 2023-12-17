import React from 'react';
import { TaskIcon } from '.'

function CheckIcon({completed}) {
    return (
        <TaskIcon
            type="check"
            color={completed?'green':'black'}
        />
    );
}

export { CheckIcon };