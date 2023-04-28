import { ReactComponent as SearchIcon } from "assets/icon-search.svg";
import styles from "./Search.module.scss";
import { Button } from "components/Button";

interface SearchProps {
    hasError: boolean;
    onSubmit: (text: string) => void;
}

type InputFields = {
    username: HTMLInputElement;
};

export const Search = ({ hasError, onSubmit }: SearchProps) => {
    const handleSubmit = (
        e: React.FormEvent<HTMLFormElement & InputFields>
    ) => {
        e.preventDefault();
        const text = e.currentTarget.username.value;
        if (text.trim()) {
            onSubmit(text);
            e.currentTarget.reset();
        }
    };

    return (
        <form onSubmit={handleSubmit} autoComplete="off">
            <div className={styles.search}>
                <label htmlFor="search" className={styles.label}>
                    <SearchIcon />
                </label>
                <input
                    id="search"
                    name="username"
                    type="text"
                    placeholder="search"
                    className={styles.textField}
                />
                {hasError && <div className={styles.error}>no result</div>}
                <Button>submit</Button>
            </div>
        </form>
    );
};
