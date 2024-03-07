import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    const [answer, setAnswer] = useState<string>("");

    const changeAnswer = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setAnswer(event.target.value);
    };
    return (
        <div>
            <h3>Check Answer</h3>
            <Form.Group controlId="formAnswer">
                <Form.Label>Answer:</Form.Label>
                <Form.Control value={answer} onChange={changeAnswer} />
            </Form.Group>
            <div>{answer === expectedAnswer ? "✔️" : "❌"}</div>
        </div>
    );
}
