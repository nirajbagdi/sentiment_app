import React from 'react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts';

const BarChartComponent = ({ data }) => (
	<div>
		<ResponsiveContainer width={600} height={400}>
			<BarChart data={data} isAnimationActive={false}>
				<XAxis
					dataKey="sentiment"
					axisLine={{ stroke: '#113946' }}
					tick={{ fill: '#113946' }}
				/>

				<YAxis axisLine={{ stroke: '#113946' }} tick={{ fill: '#113946' }} />
				<Tooltip />
				<Legend />

				<Bar dataKey="articles" fill=" #86A789" />
			</BarChart>
		</ResponsiveContainer>
	</div>
);

export default BarChartComponent;
