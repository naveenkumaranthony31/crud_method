import Card from "./card";


function Dashboard() {
    const data = [
        {
            id: 1,
            year: "Earnings (Monthly)",
            price: "$40,000",
            theme:"primary"

        },
        {
            id: 2,
            year: "Earnings (Annual)",
            price: "$215,000",
            theme:"success"

        },
        {
            id: 3,
            year: "Tasks",
            price: "50%",
            theme:"info"

        },
        {
            id: 4,
            year: "Pending Requests",
            price: "18",
            theme:"warning"
        },
    ]
    return (<div class="container-fluid">
        <div class="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 class="h3 mb-0 text-gray-800">Dashboard</h1>
            <a href="#" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                class="fas fa-download fa-sm text-white-50"></i> Generate Report</a>
        </div>
        <div class='row'>
            {data.map((item) => {
                return<Card item={item}></Card>
            })}

        </div>
    </div>  



    )
}
export default Dashboard;