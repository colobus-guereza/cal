:root {
    --neon-yellow: #ffff00;
    --neon-green: #00ff66;
    --neon-red: #ff0033;
    --dark-bg: #0a0a0f;
}

body {
    margin: 0;
    padding: 0;
    background-color: var(--dark-bg);
    color: white;
    font-family: 'Orbitron', sans-serif;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

.container {
    width: 90%;
    max-width: 400px;
    height: auto;
    padding: 2rem;
    background: rgba(0, 0, 0, 0.8);
    border: 1px solid var(--neon-yellow);
    box-shadow: 0 0 20px var(--neon-yellow);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
}

h1 {
    text-align: center;
    color: var(--neon-yellow);
    text-shadow: 0 0 10px var(--neon-yellow);
    margin-bottom: 2rem;
    font-size: 1.8rem;
}

.input-group {
    margin-bottom: 1.5rem;
    position: relative;
}

input {
    width: 100%;
    padding: 0.8rem;
    background: transparent;
    border: none;
    color: white;
    font-size: 1.1rem;
    outline: none;
}

.neon-line {
    height: 2px;
    background: var(--neon-yellow);
    box-shadow: 0 0 5px var(--neon-yellow);
    width: 100%;
}

.fee-checkbox {
    margin: 1rem 0;
    color: var(--neon-yellow);
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

.fee-checkbox input[type="checkbox"] {
    width: auto;
    cursor: pointer;
}

.fee-checkbox label {
    cursor: pointer;
}

.percentage-buttons {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;
    margin: 1rem 0;
}

button {
    padding: 0.8rem;
    background: transparent;
    border: 1px solid var(--neon-yellow);
    color: var(--neon-yellow);
    cursor: pointer;
    transition: all 0.3s;
    font-family: 'Orbitron', sans-serif;
}

button:hover {
    background: var(--neon-yellow);
    color: black;
    box-shadow: 0 0 10px var(--neon-yellow);
}

.reset-btn {
    width: 100%;
    margin-bottom: 1.5rem;
}

.result {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    margin-bottom: 1rem;
}

.profit, .loss {
    text-align: center;
}

.profit h3 {
    color: var(--neon-green);
    margin-bottom: 0.5rem;
}

.loss h3 {
    color: var(--neon-red);
    margin-bottom: 0.5rem;
}

.profit p {
    color: var(--neon-green);
    margin: 0.5rem 0;
}

.loss p {
    color: var(--neon-red);
    margin: 0.5rem 0;
}

@media (max-width: 480px) {
    .percentage-buttons {
        grid-template-columns: repeat(2, 1fr);
    }
} 
