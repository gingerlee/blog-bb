import React, { useState } from 'react';
import { css } from '@emotion/react';

const Shaka = () => {
    const [ shakas, setShakas ] = useState(0);
    const label = `🤙 ${shakas} ${shakas === 1? 'shaka' : 'shakas'}`;

    return (
        <button
            css={css`
                background: rebeccapurple;
                border: none;
                color: white;
                font-size: 1.25rem;
            `}
            onClick={() => setShakas(shakas + 1)}
>
{label}
        </button>
    )
}

export default Shaka;