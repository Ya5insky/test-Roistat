<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    
    $name = isset($_POST['name']) ? htmlspecialchars($_POST['name']) : '';
    $company_website = isset($_POST['company_website']) ? htmlspecialchars($_POST['company_website']) : '';
    $phone = isset($_POST['phone']) ? htmlspecialchars($_POST['phone']) : '';


    $formData = [
        'Name' => $name,
        'Company Website' => $company_website,
        'Phone' => $phone,
        'Agreement' => 'Согласие дано',
        'Timestamp' => date('Y-m-d H:i:s')
    ];

   
    $logData = implode(', ', $formData) . PHP_EOL;

    
    $logFile = fopen("form_data_log.txt", "a");

    
    fwrite($logFile, $logData);

    
    fclose($logFile);

    
    echo json_encode(["success" => true]);
} else {
    
    http_response_code(400);
    echo json_encode(["error" => "Invalid request method"]);
}
?>
