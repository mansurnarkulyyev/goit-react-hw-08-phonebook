import React from 'react';
import Button from 'shared/components/Button';

function UserMenu() {
    function onClick() { }
    return (
        <div>
            <p>email</p>
            <Button text='Logout' type='button' onClick={onClick} />
        </div>
    )
}

export default UserMenu;


