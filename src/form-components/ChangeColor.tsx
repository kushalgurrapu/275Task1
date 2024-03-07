import React, { useState } from "react";
import { Form } from "react-bootstrap";

const colors = [
    "red",
    "blue",
    "green",
    "orange",
    "purple",
    "cyan",
    "magenta",
    "yellow"
];

export function ChangeColor(): JSX.Element {
    const [color, setColor] = useState<string>("red");

    const changeColor = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setColor(event.target.value);
    };
    return (
        <>
            <div>
                <h3>Change Color</h3>
                {colors.map((curr: string) => (
                    <Form.Check
                        inline
                        type="radio"
                        onChange={changeColor}
                        key={curr}
                        label={
                            <div
                                // data-testid="colored-box"
                                style={{ backgroundColor: curr }}
                            >
                                {curr}
                            </div>
                        }
                        value={curr}
                        checked={color === curr}
                    />
                ))}
            </div>
            <div>
                You have chosen{" "}
                {
                    <span
                        data-testid="colored-box"
                        style={{ backgroundColor: color }}
                    >
                        {color}
                    </span>
                }
            </div>
        </>
    );
}
