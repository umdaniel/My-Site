import React, { useState } from 'react'

export default function ContactForm() {

    const [name, setName] = useState('');
    return (
        <div>
            <form>
                <div className="form-group">
                    <label htmlFor="name">Your name
                    <input type="text" id="name" name="name" value={name}
                    onChange={e => setName(e.target.value)} 
                    />
                    </label>
                </div>
            </form>
        </div>
    )
}
