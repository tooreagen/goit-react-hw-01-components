export const Button = ({ text }) => {
    return (
    <>
            {text.map(txt => (
                <div>
                    <button>{txt.text}</button>
                    <br />
                </div>
            ))}
    </>
    );
};











