<!--
#======================================================#
# + Projet: Principal Component Analysis automation    #
# + Date:   04/2022                                    #
# + Description: Return PCA and infos by and CSV or    #
# XLSX that was given by user                          #
# + Author: Thiago Piovesan                            #
#======================================================#
# Libs importation:
-->
<template>
  <div class="main">
    <v-container>
        <v-layout column>
            <!-- <v-flex  class="display-1 text-xs-center my-5">What is PCA?</v-flex> -->

            <v-flex>
              <div class="headline mt-3"># Objective:</div>
              <p class="steps">→ This project has the main pourpose of understand and test the methods and functions developed to execute an PCA implementation in an "Excel" file (planilha).<br></p>
              <div class="headline mt-3"># How does it work?</div>
              <p class="steps">→ You can simply Upload your file on this web application and it will procress the file and get you back the response of that data after the PCA.<br></p>
              <p class="steps">→ To get it start, just click on "Sparta" on top-left, after that click on "Upload your file here!" select your file and click on "Upload" button.<br></p>
            </v-flex>
            <br><hr>       

            <v-flex>
              <div class="headline mt-3"># What is PCA?</div>
              <p class="steps">
                → PCA is used in applications when you have big data that might have some statistical distribution and you want to uncover the low dimensional patterns to build models off of it. <br>
              </p>
            </v-flex>
            <br><hr>
            <v-flex>
              <div class="headline mt-3"># Steps to execute PCA:</div>
              <p class="steps">
                1. Compute mean row. <br>
              </p>
              <p class="steps">
                2. Subtract mean from the main (original) data: B = x_matrix - x_matrix_hat: <br>
                → Subtract the mean of each variable from the dataset so that the dataset should be centered on the origin.  <br>
              </p>
              <p class="steps">              
                3. Covariance matrix of the rows of B: <br>
                → Calculate the Covariance Matrix of the mean-centered data. The covariance matrix is a square matrix denoting the covariance of the elements with each other. <br>
              </p>
              <p class="steps">
                4. Compute Eigenvalues and Eigenvectors of C: <br>
                → The Eigenvectors of the Covariance matrix we get are Orthogonal to each other and each vector represents a principal axis. <br>
                → A Higher Eigenvalue corresponds to a higher variability. Hence the principal axis with the higher Eigenvalue will be an axis capturing higher variability in the data. <br>
                → Orthogonal means the vectors are mutually perpendicular to each other. Eigenvalues and vectors seem to be very scary until we get the idea and concepts behind it. <br>
              </p>
              <p class="steps">
                5. Principal component: T = BV <br>
              </p>
            <br><hr>       
            </v-flex>

        </v-layout>
    </v-container>
  </div>
</template>

<script>
</script>

<style lang='scss' scoped>
.main {
  margin-top: 2%;
  margin-left: 22%;
  width: 70%;
}
.steps {
  text-align: justify;
}
p {
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  color: black;
  padding-top: 22px;
}
.headline {
  font-family: 'Roboto', sans-serif;
  font-size: 24px;
  color: black;
  text-align: left;
  margin-left: 3%;
  font-weight: bold;
}
</style>