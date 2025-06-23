import {Alert, Snackbar} from "@mui/material";


/**
 * ErrorPopup is used anywhere we want a 'default' error popup at the bottom of the screen with minimal fuss.
 *
 * @param error
 * @param setError
 * @constructor
 */
export default function ErrorPopup({error, setError}: { error: string, setError: Function }) {
    return (
        <Snackbar open={!!error} autoHideDuration={3000}>
            <Alert
                severity='error'
                sx={{width: '100%'}}
                onClose={() => setError('')}
            >
                {error}
            </Alert>
        </Snackbar>
    )
}