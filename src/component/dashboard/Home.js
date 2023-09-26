import React, { useEffect, useState } from 'react'
import MetricCard from './MetricCard'
// import ApexCharts from 'apexcharts'
import Chart from "react-apexcharts";


const Home = () => {
    // The donot chart data
    const [chartData, setChartData] = useState({
        options: {},
        series: [44, 55, 41, 17, 15],
        labels: ['A', 'B', 'C', 'D', 'E'],
      });

    // Responsible for the scrolling up of the nasted route in the dashboard
    useEffect(() => {
      

        window.scroll(0,0)
    }, [])
    



    const options = {
        chart: {
          type: 'bar',
          height: 50,
          stacked: true,
          toolbar: {
            show: false
          },
          zoom: {
            enabled: true
          }
        },
        responsive: [{
          breakpoint: 480,
          options: {
            legend: {
              position: 'top',
              offsetX: 10,
              offsetY: 0
            }
          }
        }],
        plotOptions: {
          bar: {
            horizontal: false,
            borderRadius: 10,
            dataLabels: {
              total: {
                enabled: false,
                style: {
                  // display:'none',
                //   fontSize: '1px',
                //   fontWeight: 9,
                //   color:'green',
                  // marginBottom: '10px'
                }
              }
            }
          },
        },
        xaxis: {
          type: 'datetime',
          categories: ['01/01/2011 GMT', '01/02/2011 GMT', '01/03/2011 GMT', '01/04/2011 GMT',
            '01/05/2011 GMT', '01/06/2011 GMT', "01/07/2011 GMT",
            "01/08/2011 GMT",
            "01/09/2011 GMT",
            "01/10/2011 GMT",
            "01/11/2011 GMT",
            "01/12/2011 GMT",
          ],
        },
        legend: {
          position: 'top',
          offsetY: 10,
          offsetX: 60,
          style: {
            padding:'1px',
            background:'red'
          }
        },
        fill: {
          opacity: 1
        },
        colors: [ "#0973CA","#FFC11C"],
    
    
      };
    
      const series =  [{
        name: 'Cases reported',
        data: [44, 55, 41, 67, 22, 43, 44, 55, 41, 67, 22, 43]
      },
      {
        name: 'Cases solved',
        data: [21, 7, 25, 13, 22, 8, 21, 7, 25, 13, 22, 18]
      }]

  return (
    <>
         <div className="container w-full mx-auto pt-20">
        {/* ... (rest of your content code start) */}
        <div class="w-full px-4 md:px-0 md:mt-8 mb-16 text-gray-800 leading-normal">

            {/* <!--Console Content--> */}

            <div class="flex flex-wrap">
               <MetricCard title="total sign up" value="500" />
               <MetricCard title="rergistered student" value="50" />
               <MetricCard title="enrolled courses" value="40" />
               <MetricCard title="active courses" value="50" />
               <MetricCard title="no of instructor" value="5" />
               <MetricCard title="total" value="5" />
            </div>

            {/* <!--Divider--> */}
            {/* <hr class="border-b-2 border-gray-400 my-8 mx-4"> */}
            {/* <hr></hr> */}

            <div class="flex flex-row flex-wrap flex-grow mt-2">

                <div class="w-full md:w-1/2 p-3">
                    {/* <!--Graph Card--> */}
                    <div class="bg-white border rounded shadow">
                        <div class="border-b p-3">
                            <h5 class="font-bold uppercase text-gray-600">Graph</h5>
                        </div>
                        <div class="p-1">
                            <Chart options={options} series={series} type="bar" width="100%" height="233" />
                          
                        </div>
                    </div>
                    {/* <!--/Graph Card--> */}
                </div>

                <div class="w-full md:w-1/2 p-3">
                    {/* <!--Graph Card--> */}
                    <div class="bg-white border rounded shadow">
                        <div class="border-b p-3">
                            <h5 class="font-bold uppercase text-gray-600">Graph</h5>
                        </div>
                        <div class="p-1">
                            <Chart options={chartData.options} series={chartData.series} type="donut" width="380" />
                            
                        </div>
                    </div>
                    {/* <!--/Graph Card--> */}
                </div>

                

                
              

                <div class="w-full p-3">
                    {/* <!--Table Card--> */}
                    <div class="bg-white border rounded shadow">
                        <div class="border-b p-3">
                            <h5 class="font-bold uppercase text-gray-600">Table</h5>
                        </div>
                        <div class="p-5">
                            <table class="w-full p-5 text-gray-700">
                                <thead>
                                    <tr>
                                        <th class="text-left text-blue-900">Name</th>
                                        <th class="text-left text-blue-900">Side</th>
                                        <th class="text-left text-blue-900">Role</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr>
                                        <td>Obi Wan Kenobi</td>
                                        <td>Light</td>
                                        <td>Jedi</td>
                                    </tr>
                                    <tr>
                                        <td>Greedo</td>
                                        <td>South</td>
                                        <td>Scumbag</td>
                                    </tr>
                                    <tr>
                                        <td>Darth Vader</td>
                                        <td>Dark</td>
                                        <td>Sith</td>
                                    </tr>
                                </tbody>
                            </table>

                            <p class="py-2"><a href="#">See More issues...</a></p>

                        </div>
                    </div>
                    {/* <!--/table Card--> */}
                </div>


            </div>

            {/* <!--/ Console Content--> */}

        </div>


        {/* ... (rest of your content code end) */}
      </div>
    </>
  )
}

export default Home