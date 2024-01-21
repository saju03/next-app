import React, { useEffect, useState } from 'react'

function FLightResultLoader({ isFilterAssembled, type = null, isLoading = true }) {

 

  const [loadingStatus, setLoadingStatus] = useState(0)

  useEffect(() => {

    if (loadingStatus != 100) {
      var TimeOut;
      TimeOut = setTimeout(() => {
        setLoadingStatus(loadingStatus + 1)
      }, 180);
    } else {
      clearTimeout(TimeOut)
    }

  }, [loadingStatus]) 

  
  return (
    <div className="progress_main">
      <div className="row ">

        {isLoading && <div className="col-md-12">
          <div className="progress mb-4">
            <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} style={{ width: loadingStatus + "%" }}>{loadingStatus}%</div>
          </div>
        </div>}

        { !isLoading || !isFilterAssembled  &&
          <>
            <div className="col-md-3">
              <div className="result_col w-100">
                <div className="border__box mb-4 ">
                  <div className="timeline-item">
                    <div className="animated-background">
                      <div className="background-masker header-top" />
                      <div className="background-masker header-left" />
                      <div className="background-masker header-right" />
                      <div className="background-masker header-bottom" />
                      <div className="background-masker subheader-bottom" />
                      <div className="background-masker place_one " />
                      <div className="background-masker place_two " />
                      <div className="background-masker place_three " />
                      <div className="background-masker place_four " />
                      <div className="background-masker place_five " />
                      <div className="background-masker place_six " />
                    </div>
                    <div className="animated-background mb-0">
                      <div className="background-masker header-top" />
                      <div className="background-masker header-left" />
                      <div className="background-masker header-right" />
                      <div className="background-masker header-bottom" />
                      <div className="background-masker subheader-bottom" />
                      <div className="background-masker place_one " />
                      <div className="background-masker place_two " />
                      <div className="background-masker place_three " />
                      <div className="background-masker place_four " />
                      <div className="background-masker place_five " />
                      <div className="background-masker place_six " />
                    </div>
                  </div>
                </div>
                <div className="border__box mb-4 ">
                  <div className="timeline-item">
                    <div className="animated-background">
                      <div className="background-masker header-top" />
                      <div className="background-masker header-left" />
                      <div className="background-masker header-right" />
                      <div className="background-masker header-bottom" />
                      <div className="background-masker subheader-bottom" />
                      <div className="background-masker place_one " />
                      <div className="background-masker place_two " />
                      <div className="background-masker place_three " />
                      <div className="background-masker place_four " />
                      <div className="background-masker place_five " />
                      <div className="background-masker place_six " />
                    </div>
                    <div className="animated-background mb-0">
                      <div className="background-masker header-top" />
                      <div className="background-masker header-left" />
                      <div className="background-masker header-right" />
                      <div className="background-masker header-bottom" />
                      <div className="background-masker subheader-bottom" />
                      <div className="background-masker place_one " />
                      <div className="background-masker place_two " />
                      <div className="background-masker place_three " />
                      <div className="background-masker place_four " />
                      <div className="background-masker place_five " />
                      <div className="background-masker place_six " />
                    </div>
                  </div>
                </div>
                <div className="border__box mb-4 ">
                  <div className="timeline-item">
                    <div className="animated-background">
                      <div className="background-masker header-top" />
                      <div className="background-masker header-left" />
                      <div className="background-masker header-right" />
                      <div className="background-masker header-bottom" />
                      <div className="background-masker subheader-bottom" />
                      <div className="background-masker place_one " />
                      <div className="background-masker place_two " />
                      <div className="background-masker place_three " />
                      <div className="background-masker place_four " />
                      <div className="background-masker place_five " />
                      <div className="background-masker place_six " />
                    </div>
                    <div className="animated-background mb-0">
                      <div className="background-masker header-top" />
                      <div className="background-masker header-left" />
                      <div className="background-masker header-right" />
                      <div className="background-masker header-bottom" />
                      <div className="background-masker subheader-bottom" />
                      <div className="background-masker place_one " />
                      <div className="background-masker place_two " />
                      <div className="background-masker place_three " />
                      <div className="background-masker place_four " />
                      <div className="background-masker place_five " />
                      <div className="background-masker place_six " />
                    </div>
                  </div>
                </div>
                <div className="border__box mb-4 ">
                  <div className="timeline-item">
                    <div className="animated-background">
                      <div className="background-masker header-top" />
                      <div className="background-masker header-left" />
                      <div className="background-masker header-right" />
                      <div className="background-masker header-bottom" />
                      <div className="background-masker subheader-bottom" />
                      <div className="background-masker place_one " />
                      <div className="background-masker place_two " />
                      <div className="background-masker place_three " />
                      <div className="background-masker place_four " />
                      <div className="background-masker place_five " />
                      <div className="background-masker place_six " />
                    </div>
                    <div className="animated-background mb-0">
                      <div className="background-masker header-top" />
                      <div className="background-masker header-left" />
                      <div className="background-masker header-right" />
                      <div className="background-masker header-bottom" />
                      <div className="background-masker subheader-bottom" />
                      <div className="background-masker place_one " />
                      <div className="background-masker place_two " />
                      <div className="background-masker place_three " />
                      <div className="background-masker place_four " />
                      <div className="background-masker place_five " />
                      <div className="background-masker place_six " />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-9">
              <div className="result_col w-100">
                <div className="border__box mb-4 ">
                  <div className="timeline-item">
                    <div className="animated-background">
                      <div className="background-masker header-top" />
                      <div className="background-masker header-left" />
                      <div className="background-masker header-right" />
                      <div className="background-masker header-bottom" />
                      <div className="background-masker subheader-bottom" />
                      <div className="background-masker place_one " />
                      <div className="background-masker place_two " />
                      <div className="background-masker place_three " />
                      <div className="background-masker place_four " />
                      <div className="background-masker place_five " />
                      <div className="background-masker place_six " />
                    </div>
                    <div className="animated-background mb-0">
                      <div className="background-masker header-top" />
                      <div className="background-masker header-left" />
                      <div className="background-masker header-right" />
                      <div className="background-masker header-bottom" />
                      <div className="background-masker subheader-bottom" />
                      <div className="background-masker place_one " />
                      <div className="background-masker place_two " />
                      <div className="background-masker place_three " />
                      <div className="background-masker place_four " />
                      <div className="background-masker place_five " />
                      <div className="background-masker place_six " />
                    </div>
                  </div>
                </div>
                <div className="border__box mb-4 ">
                  <div className="timeline-item">
                    <div className="animated-background">
                      <div className="background-masker header-top" />
                      <div className="background-masker header-left" />
                      <div className="background-masker header-right" />
                      <div className="background-masker header-bottom" />
                      <div className="background-masker subheader-bottom" />
                      <div className="background-masker place_one " />
                      <div className="background-masker place_two " />
                      <div className="background-masker place_three " />
                      <div className="background-masker place_four " />
                      <div className="background-masker place_five " />
                      <div className="background-masker place_six " />
                    </div>
                    <div className="animated-background mb-0">
                      <div className="background-masker header-top" />
                      <div className="background-masker header-left" />
                      <div className="background-masker header-right" />
                      <div className="background-masker header-bottom" />
                      <div className="background-masker subheader-bottom" />
                      <div className="background-masker place_one " />
                      <div className="background-masker place_two " />
                      <div className="background-masker place_three " />
                      <div className="background-masker place_four " />
                      <div className="background-masker place_five " />
                      <div className="background-masker place_six " />
                    </div>
                  </div>
                </div>
                <div className="border__box mb-4 ">
                  <div className="timeline-item">
                    <div className="animated-background">
                      <div className="background-masker header-top" />
                      <div className="background-masker header-left" />
                      <div className="background-masker header-right" />
                      <div className="background-masker header-bottom" />
                      <div className="background-masker subheader-bottom" />
                      <div className="background-masker place_one " />
                      <div className="background-masker place_two " />
                      <div className="background-masker place_three " />
                      <div className="background-masker place_four " />
                      <div className="background-masker place_five " />
                      <div className="background-masker place_six " />
                    </div>
                    <div className="animated-background mb-0">
                      <div className="background-masker header-top" />
                      <div className="background-masker header-left" />
                      <div className="background-masker header-right" />
                      <div className="background-masker header-bottom" />
                      <div className="background-masker subheader-bottom" />
                      <div className="background-masker place_one " />
                      <div className="background-masker place_two " />
                      <div className="background-masker place_three " />
                      <div className="background-masker place_four " />
                      <div className="background-masker place_five " />
                      <div className="background-masker place_six " />
                    </div>
                  </div>
                </div>
                <div className="border__box mb-4 ">
                  <div className="timeline-item">
                    <div className="animated-background">
                      <div className="background-masker header-top" />
                      <div className="background-masker header-left" />
                      <div className="background-masker header-right" />
                      <div className="background-masker header-bottom" />
                      <div className="background-masker subheader-bottom" />
                      <div className="background-masker place_one " />
                      <div className="background-masker place_two " />
                      <div className="background-masker place_three " />
                      <div className="background-masker place_four " />
                      <div className="background-masker place_five " />
                      <div className="background-masker place_six " />
                    </div>
                    <div className="animated-background mb-0">
                      <div className="background-masker header-top" />
                      <div className="background-masker header-left" />
                      <div className="background-masker header-right" />
                      <div className="background-masker header-bottom" />
                      <div className="background-masker subheader-bottom" />
                      <div className="background-masker place_one " />
                      <div className="background-masker place_two " />
                      <div className="background-masker place_three " />
                      <div className="background-masker place_four " />
                      <div className="background-masker place_five " />
                      <div className="background-masker place_six " />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        }
      </div>
    </div>
  )
}

export default FLightResultLoader