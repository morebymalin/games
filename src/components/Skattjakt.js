function handleCheck() {
    if (!current.answer) {
        setResult("Rätt!");
        setConfirmedCorrect(true);
    }
    // Additional logic for the function continues here...
}

return (
    <div>
        {current.answer && (
            <div>
                <input type='text' />
                <button onClick={handleCheck}>Kolla svar</button>
            </div>
        )}
        {(confirmedCorrect || !current.answer) && (
            <button>Nästa</button>
        )}
    </div>
);
