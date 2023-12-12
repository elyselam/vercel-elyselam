
export default function Q1() {
  const content = `Customer needed help moving data from Google Play analytics to BigQuery but the data was either returning all sales reports or errors about “Invalid Argument”. I inspected their logs and found that data from their CSV uploads were not matching the schema in BigQuery datasets. I suggested the customer use flags that allow jagged rows, ignore unknown values and set a max bad records count when setting up the job execution in Bash. I also provided a Python script to validate data before customer uploads to Cloud Storage. Customer confirmed that the flags suggestions worked.`
  return (
   
      <div style={{ textAlign: 'center' as const, marginTop: '50px' }}>
        {content}
      </div>

  )
}
