<!doctype html>
<html lang="en">

<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css"
        integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">

    <title>form response</title>
</head>

<body>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="#">Assignment 3</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <a class="nav-link" href="give_input.php">Home <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#" aria-disabled="true">Link</a>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                        data-toggle="dropdown" aria-haspopup="false" aria-expanded="false">
                        Dropdown
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a class="dropdown-item" href="#">Action</a>
                        <a class="dropdown-item" href="#">Another action</a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" href="#">Something else here</a>
                    </div>
                </li>
                <li class="nav-item">
                    <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                </li>
            </ul>
            <form class="form-inline my-2 my-lg-0">
                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
        </div>
    </nav>
    <div class="container mt-5">
        <div class="jumbotron">
            <div class="row">


                <div class="col-md-7 text-center">
                    <div class="card border-primary p-3">
                        <h4 class="mb-3">Personal Information</h4>
                        <!-- <p><strong>Name:</strong> <?php echo $_POST['firstName1'] . " " . $_POST['lastName1']; ?></p> -->
                        <p><strong>Name:</strong>
                            <?php
                            $_firstname = $_POST['firstName1'];
                            $_lastname = $_POST['lastName1'];
                            $_name = $_firstname . $_lastname;
                            echo $_name;
                                ?>
                        </p>
                        <p><strong>Email:</strong>
                            <?php echo $_POST['email']; ?>
                        </p>
                        <p><strong>Address:</strong>
                            <?php echo $_POST['address']; ?>
                        </p>
                    </div>
                </div>

                <div class="col-md-5">

                    <?php
                    if (isset($_FILES['photo'])) {
                        $file_name = $_FILES['photo']['name'];
                        $file_tmp = $_FILES['photo']['tmp_name'];
                        $file_type = $_FILES['photo']['type'];
                        $file_size = $_FILES['photo']['size'];
                        $file_ext = strtolower(pathinfo($file_name, PATHINFO_EXTENSION));
                        $allowed_ext = array("jpg", "jpeg", "png", "gif");

                        // check if file is a valid image
                        if (!in_array($file_ext, $allowed_ext)) {
                            echo "Invalid file type. Please upload a valid image file.";
                        } else {
                            // move uploaded file to desired directory
                            move_uploaded_file($file_tmp, "uploads/" . $file_name);

                            // display the uploaded photo
                            if (file_exists("uploads/" . $file_name)) {
                                list($width, $height) = getimagesize("uploads/" . $file_name);
                                echo "<img src='uploads/" . $file_name . "' alt='uploaded photo' width='400'>";
                            } else {
                                echo "Failed to display uploaded photo.";
                            }
                        }
                    }
                    ?>


                </div>

            </div>
        </div>
    </div>

    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
        integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
        crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js"
        integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
        crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js"
        integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
        crossorigin="anonymous"></script>
</body>

</html>