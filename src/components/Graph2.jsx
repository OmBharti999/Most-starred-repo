import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const options = {
  title: {
    text: "My chart"
  },
  series: [
    {
      data: [1295740800, 1, 0]
    },
    { data: [1296345600, 0, 0] },
    { data: [1296950400, 0, 0] },
    { data: [1297555200, 0, 0] },
    { data: [1298160000, 0, 0] },
    { data: [1256764800, 0, 0] },
    { data: [1299369600, 0, 0] },
    { data: [1299974400, 0, 0] },
    { data: [1300579200, 0, 0] },
    { data: [1301184000, 0, 0] }
  ]
};

const url =
  "https://api.github.com/repos/octocat/hello-world/stats/code_frequency";

export default function Graph2() {
  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
}
