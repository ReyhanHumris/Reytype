export default function LeaderboardView() {
  // Dummy data since there's no backend
  const dummyLeaders = [
    { rank: 1, name: "TypingGod", wpm: 154, acc: 99 },
    { rank: 2, name: "Flash", wpm: 142, acc: 98 },
    { rank: 3, name: "KeyboardNinja", wpm: 138, acc: 100 },
    { rank: 4, name: "SpeedRacer", wpm: 125, acc: 97 },
    { rank: 5, name: "NoLook", wpm: 118, acc: 96 },
    { rank: 6, name: "CasualTyper", wpm: 105, acc: 98 },
    { rank: 7, name: "Rey", wpm: 95, acc: 99 },
  ];

  return (
    <div className="max-w-container-max w-full bg-surface-container rounded-xl p-8 border border-outline-variant/20">
      <div className="flex justify-between items-center mb-8">
        <h2 className="font-headline-lg text-primary text-3xl">Global Leaderboard</h2>
        <span className="px-3 py-1 bg-surface-variant text-on-surface-variant text-sm rounded-full border border-outline-variant/30">
          Mock Data
        </span>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-outline-variant/30 text-on-tertiary-container font-metric-label text-sm uppercase tracking-wider">
              <th className="pb-3 pr-4 w-16">Rank</th>
              <th className="pb-3 px-4">User</th>
              <th className="pb-3 px-4 text-center">WPM</th>
              <th className="pb-3 pl-4 text-right">Accuracy</th>
            </tr>
          </thead>
          <tbody>
            {dummyLeaders.map((leader) => (
              <tr key={leader.rank} className="border-b border-outline-variant/10 hover:bg-surface-variant/30 transition-colors">
                <td className="py-4 pr-4 font-headline-md text-on-surface-variant">
                  #{leader.rank}
                </td>
                <td className="py-4 px-4 font-body-lg text-on-surface font-semibold">
                  {leader.name}
                </td>
                <td className="py-4 px-4 text-center font-metric-value text-primary-fixed">
                  {leader.wpm}
                </td>
                <td className="py-4 pl-4 text-right font-metric-value text-primary">
                  {leader.acc}%
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
