export default function Log({ turns }) {
  const lastTurn = turns.length > 0 ? turns[0] : null;
  return (
    <div id="log">
      {lastTurn && (
        <p key={`${lastTurn.square.row}${lastTurn.square.col}`}>
          {lastTurn.player} selected {lastTurn.square.row}, {lastTurn.square.col}
        </p>
      )}
    </div>
  );
}
