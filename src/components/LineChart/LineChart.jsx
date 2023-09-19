import { LineChart as LChart, Line, XAxis,YAxis } from 'recharts';
const LineChart = () => {
    const studentData = [
        { id: 1, name: "Student 1", physics: 78, chemistry: 90 },
        { id: 2, name: "Student 2", physics: 82, chemistry: 88 },
        { id: 3, name: "Student 3", physics: 75, chemistry: 92 },
        { id: 4, name: "Student 4", physics: 88, chemistry: 85 },
        { id: 5, name: "Student 5", physics: 76, chemistry: 79 },
        { id: 6, name: "Student 6", physics: 95, chemistry: 94 },
        { id: 7, name: "Student 7", physics: 89, chemistry: 91 },
        { id: 8, name: "Student 8", physics: 84, chemistry: 87 },
        { id: 9, name: "Student 9", physics: 91, chemistry: 96 },
        { id: 10, name: "Student 10", physics: 79, chemistry: 83 },
      ];
      
    return (
        <div>
            <LChart width={800} height={400} data={studentData}>
                <Line dataKey="chemistry" stroke='red' ></Line>
                <Line dataKey="physics" stroke='blue' ></Line>
                <XAxis dataKey="name"></XAxis>
                <YAxis />

            </LChart>
        </div>
    );
};

export default LineChart;