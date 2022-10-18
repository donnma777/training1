/** @jsxImportSource @emotion/react */
import React from "react";

import { css } from "@emotion/react";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";

const fieldStyle = css`
  width: 100%;
  margin: .5rem auto;
`;

type MailFieldProps = {
    mail: string;
    setMame: React.Dispatch<React.SetStateAction<string>>;
}

const MailField: React.VFC<MailFieldProps> = (props) => {
    const { mail, setMail } = props;

    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        setMail(event.target.value);
    };

    return (
        <FormControl css={fieldStyle}>
            <TextField
                type="text"
                value={mail}
                label="mail（の予定）"
                onChange={(event) => handleChange(event)}
                variant="standard"
            />
        </FormControl>
    );
};

export default MailField;