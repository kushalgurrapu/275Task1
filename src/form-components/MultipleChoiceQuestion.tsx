import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer
}: {
    options: string[];
    expectedAnswer: string;
}): JSX.Element {
    const [answer, setAnswer] = useState<string>(options[0]);

    const changeAnswer = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setAnswer(event.target.value);
    };
    return (
        <div>
            <h3>Multiple Choice Question</h3>
            <Form.Group controlId="favoriteColors">
                <Form.Label>Pick an answer!</Form.Label>
                <Form.Select value={answer} onChange={changeAnswer}>
                    {options.map((curr: string) => (
                        <option key={curr} value={curr}>
                            {curr}
                        </option>
                    ))}
                </Form.Select>
            </Form.Group>
            {answer === expectedAnswer ? "✔️" : "❌"}
        </div>
    );
}
