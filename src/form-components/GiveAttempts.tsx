import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [atts, setAtts] = useState<number>(3);
    const [newAtts, setNewAtts] = useState<string>("");
    const intAtts = parseInt(newAtts) || 0;
    return (
        <>
            <div>
                <h3>Give Attempts</h3>
                <Form.Group controlId="formNewAtts">
                    <Form.Label>Atts:</Form.Label>
                    <Form.Control
                        type="number"
                        value={newAtts}
                        onChange={(
                            event: React.ChangeEvent<HTMLInputElement>
                        ) => setNewAtts(event.target.value)}
                    />
                </Form.Group>
            </div>
            <div>
                <Button disabled={!atts} onClick={() => setAtts(atts - 1)}>
                    use
                </Button>
                <Button onClick={() => setAtts(atts + intAtts)}>gain</Button>
            </div>
            <div>Attempts: {atts}</div>
        </>
    );
}
