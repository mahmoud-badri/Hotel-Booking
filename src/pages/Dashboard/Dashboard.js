import React, { useContext, useEffect } from "react";
import { Bar, Pie, Line } from "react-chartjs-2";
import { Chart, registerables, LinearScale } from "chart.js";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import {
  Container,
  Typography,
  Paper,
  Grid,
  Box,
  Card,
  CardHeader,
  CardContent,
  styled,
} from "@mui/material";
import HouseIcon from "@mui/icons-material/House";
import GetBooking from "../../component/get_booking/Get_Booking";
import { AuthContext } from "../../Context/AuthContext";
import { useState } from "react";

Chart.register(...registerables, LinearScale);

const theme = createTheme({
  palette: {
    primary: {
      main: "#ff385c",
    },
    secondary: {
      main: "#00a699",
    },
  },
});

const DashboardHeader = styled(Typography)`
  font-size: 36px;
  font-weight: bold;
  background-color: #f0f0f0;
  margin-bottom: 20px;
  padding: 15px;
`;

const StyledCard = styled(Card)`
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
`;

const HotelDashboard = () => {
  const recordsData = [30, 40, 20, 10, 50, 25];
  const breakdownData = {
    rooms: 20,
    reservations: 15,
    revenue: 5000,
    bookingConfirmations: 10,
    checkIns: 8,
    checkOuts: 5,
  };

  const chartData = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        label: "Monthly Revenue",
        backgroundColor: "rgba(255, 56, 92, 0.2)",
        borderColor: "#ff385c",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(255, 56, 92, 0.4)",
        hoverBorderColor: "#ff385c",
        data: recordsData,
      },
    ],
  };

  const pieChartData = {
    labels: ["Rooms", "Reservations", "Revenue"],
    datasets: [
      {
        label: "Hotel Breakdown",
        data: [
          breakdownData.rooms,
          breakdownData.reservations,
          breakdownData.revenue,
        ],
        backgroundColor: ["#ff6384", "#36a2eb", "#ffcd56"],
        borderColor: "#ffffff",
        borderWidth: 1,
      },
    ],
  };

  const occupancyChartData = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        label: "Occupancy Rate (%)",
        data: [65, 72, 80, 75, 68, 78],
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 2,
      },
    ],
  };

  const chartOptions = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    plugins: {
      legend: {
        position: "bottom",
      },
      tooltip: {
        callbacks: {
          label: (context) => `${context.label}: $${context.formattedValue}`,
        },
      },
    },
  };

  const occupancyOptions = {
    scales: {
      y: {
        min: 0,
        max: 100,
        ticks: {
          callback: (value) => `${value}%`,
        },
      },
    },
  };

  const pieChartOptions = {
    responsive: true,
    maintainAspectRatio: true,
    animation: {
      animateScale: false,
      animateRotate: false,
    },
  };
  const {getBookings,bookingsCont} = useContext(AuthContext);
  const [bookings, setBookings] = useState(bookingsCont);
  useEffect(() => {
      getBookings()
  }, [bookingsCont]);
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="lg">
        <DashboardHeader variant="h2" align="center" gutterBottom>
          Dashboard
        </DashboardHeader>

        <Grid container spacing={3}>
          <Grid container item xs={12} spacing={3}>
            <Grid item xs={3}>
              <StyledCard
                elevation={3}
                sx={{ borderRadius: 2, textAlign: "center" }}
              >
                <CardHeader title="Total Revenue" />
                <CardContent>
                  <Typography variant="h3" style={{ color: "#ff385c" }}>
                    ${breakdownData.revenue}
                  </Typography>
                </CardContent>
              </StyledCard>
            </Grid>

            <Grid item xs={3}>
              <StyledCard
                elevation={3}
                sx={{ borderRadius: 2, textAlign: "center",cursor:"pointer" }}
                data-bs-toggle="modal" data-bs-target="#exampleModal" 
              >
                <CardHeader
                  title={
                    <Box >
                      <HouseIcon style={{ fontSize: 18, marginRight: 1 }} />
                      Bookings
                    </Box>
                  }
                />
                <CardContent>
                  <Typography variant="h3" style={{ color: "#00a699" }}>
                    {bookings.length}
                  </Typography>
                </CardContent>
              </StyledCard>
            </Grid>

            <Grid item xs={3}>
              <StyledCard
                elevation={3}
                sx={{ borderRadius: 2, textAlign: "center" }}
              >
                <CardHeader title="Check-Ins" />
                <CardContent>
                  <Typography variant="h3" style={{ color: "#ff385c" }}>
                    {breakdownData.checkIns}
                  </Typography>
                </CardContent>
              </StyledCard>
            </Grid>

            <Grid item xs={3}>
              <StyledCard
                elevation={3}
                sx={{ borderRadius: 2, textAlign: "center" }}
              >
                <CardHeader title="Check-Outs" />
                <CardContent>
                  <Typography variant="h3" style={{ color: "#ff385c" }}>
                    {breakdownData.checkOuts}
                  </Typography>
                </CardContent>
              </StyledCard>
            </Grid>
          </Grid>

          <Grid item xs={9} sx={{ textAlign: "center" }}>
            <StyledCard elevation={3} sx={{ borderRadius: 2 }}>
              <CardHeader title="Monthly Revenue Chart" />
              <CardContent>
                <Bar data={chartData} options={chartOptions} />
              </CardContent>
            </StyledCard>
          </Grid>

          <Grid container item xs={12} spacing={3}>
            <Grid item xs={6}>
              <StyledCard elevation={3} sx={{ borderRadius: 2 }}>
                <CardHeader title="Occupancy Rate" />
                <CardContent>
                  <Line data={occupancyChartData} options={occupancyOptions} />
                </CardContent>
              </StyledCard>
            </Grid>
            <Grid item xs={6}>
              <StyledCard elevation={3} sx={{ borderRadius: 2 }}>
                <CardHeader title="Hotel Breakdown" />
                <CardContent>
                  <Pie data={pieChartData} options={pieChartOptions} />
                </CardContent>
              </StyledCard>
            </Grid>
          </Grid>
        </Grid>
        {/* Modal   */}
        <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content" style={{ width: "160%" }}>
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                <button className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
              </div>
              <div className="modal-body">
                  <GetBooking/>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </ThemeProvider>
  );
};

export default HotelDashboard;
