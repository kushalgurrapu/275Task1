import React, { useState } from "react";
import { Col, Form, Row } from "react-bootstrap";

export function EditMode(): JSX.Element {
    const [edit, setEdit] = useState<boolean>(false);
    const [name, setName] = useState<string>("Your Name");
    const [student, setStudent] = useState<boolean>(true);

    const changeName = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setName(event.target.value);
    };
    const changeStudent = (event: React.ChangeEvent<HTMLInputElement>) => {
        setStudent(event.target.checked);
    };
    const changeEdit = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setEdit(event.target.checked);
    };
    return (
        <div>
            <h3>Edit Mode</h3>
            <Form.Check
                type="switch"
                id="is-edit-check"
                label="Edit Mode?"
                checked={edit}
                onChange={changeEdit}
            />
            {!edit ? (
                <div>
                    {name} is {student || "not"} a student
                </div>
            ) : (
                <>
                    <Form.Group controlId="formMovieName" as={Row}>
                        <Form.Label column sm={2}>
                            Username:
                        </Form.Label>
                        <Col>
                            <Form.Control value={name} onChange={changeName} />
                        </Col>
                    </Form.Group>
                    <Form.Check
                        type="checkbox"
                        id="is-student-check"
                        label="Student?"
                        checked={student}
                        onChange={changeStudent}
                    />
                </>
            )}
        </div>
    );
}
